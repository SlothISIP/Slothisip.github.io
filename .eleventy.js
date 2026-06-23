// .eleventy.js - Eleventy 3.x config (CommonJS)
const path = require("node:path");
const fs = require("node:fs");
const crypto = require("node:crypto");
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  // ---------- YAML data files (.yaml/.yml are NOT parsed by default in 3.x) ----------
  eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

  // ---------- CSS cache-busting ----------
  // main.css is passthrough-copied (stable URL, not content-hashed like the webp),
  // so browsers cache it and miss CSS/layout changes. Append a content hash as ?v=
  // so every CSS edit forces a fresh fetch. Recomputed each build.
  eleventyConfig.addGlobalData("cssHash", () => {
    try {
      const css = fs.readFileSync("src/assets/css/main.css");
      return crypto.createHash("sha1").update(css).digest("hex").slice(0, 10);
    } catch (e) {
      return "0";
    }
  });

  // ---------- Passthrough copy (shared assets, one copy) ----------
  eleventyConfig.addPassthroughCopy({ "src/assets/css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img/favicon": "assets/img/favicon" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img/favicon/favicon.ico": "favicon.ico" }); // vanity root favicon
  eleventyConfig.addPassthroughCopy({ "src/assets/img/KimJuO.jpg": "assets/img/KimJuO.jpg" }); // og:image source
  eleventyConfig.addPassthroughCopy({ "src/data": "data" }); // CV pdf + 18 .bib
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  // docs/ stays in the repo but is NOT part of the site build
  eleventyConfig.ignores.add("docs/**");

  eleventyConfig.addWatchTarget("src/assets/css/");

  // ---------- eleventy-img shortcodes (lazy-required) ----------
  async function buildImage(src, widths, sizes, attrs, formats) {
    const Image = require("@11ty/eleventy-img");
    const inputPath = path.join("src/assets/img", src);
    const metadata = await Image(inputPath, {
      widths,
      formats,
      svgShortCircuit: true, // SVGs pass through unchanged (no rasterization)
      outputDir: "_site/assets/img/opt/",
      urlPath: "/assets/img/opt/",
      sharpWebpOptions: { quality: 80 },
      sharpJpegOptions: { quality: 82, mozjpeg: true },
      cacheOptions: { duration: "30d", directory: ".cache/eleventy-img/" }
    });
    return Image.generateHTML(metadata, attrs);
  }

  // Figures: WebP for raster (universal support; avoids huge lossless-PNG fallbacks of
  // screenshots); SVGs pass through as vector via svgShortCircuit. eager=true for LCP/above-the-fold.
  eleventyConfig.addAsyncShortcode("image", (src, alt, widths = [768, 1280], sizes = "100vw", className = "", eager = false) => {
    const attrs = { alt, sizes, loading: eager ? "eager" : "lazy", decoding: "async", class: className };
    if (eager) attrs.fetchpriority = "high";
    return buildImage(src, [...new Set(widths)], sizes, attrs, ["svg", "webp"]);
  });
  // Thumbnails: tiny, keep a PNG/JPEG fallback alongside WebP.
  eleventyConfig.addAsyncShortcode("thumb", (src, alt) =>
    buildImage(src, [160, 320], "160px", { alt, sizes: "160px", loading: "lazy", decoding: "async", class: "project-thumb" }, ["webp", "auto"])
  );

  // ---------- Filters ----------
  eleventyConfig.addFilter("year", (d) => String(d).slice(0, 4));

  // Inline a .bib file's contents by key (for the BibTeX box on publication pages).
  eleventyConfig.addFilter("bibtex", (key) => {
    try { return require("node:fs").readFileSync(path.join("src/data", key + ".bib"), "utf8").trim(); }
    catch (e) { return ""; }
  });

  // ---------- Figure placement filters (Option A: figures bind to narrative beats) ----------
  // A figure may carry: section (lead|problem|decision|results|foothold|stack), beat (matches a
  // design_decision id/title or foothold id/claim), order. Un-keyed figures fall to the gallery,
  // so a project with no placement keys renders exactly as before.
  const FIG_SECTIONS = ["lead", "problem", "approach", "decision", "results", "foothold", "stack"];
  eleventyConfig.addFilter("figuresIn", (figs, section) =>
    (figs || []).filter((f) => f.section === section));
  eleventyConfig.addFilter("figuresLead", (figs) =>
    (figs || []).find((f) => f.section === "lead") || null);
  eleventyConfig.addFilter("figuresBy", (figs, section, beat) =>
    (figs || [])
      .filter((f) => f.section === section && f.beat === beat)
      .sort((a, b) => (a.order || 0) - (b.order || 0)));
  eleventyConfig.addFilter("figuresResidual", (figs) =>
    (figs || []).filter((f) => !FIG_SECTIONS.includes(f.section)));
  // A results figure may carry featured:true to render full-width ABOVE the grid (dense,
  // headline evidence that would be illegible at grid-cell width); the rest stay in the grid.
  eleventyConfig.addFilter("figuresFeatured", (figs) =>
    (figs || []).filter((f) => f.section === "results" && f.featured));
  eleventyConfig.addFilter("figuresGrid", (figs) =>
    (figs || []).filter((f) => f.section === "results" && !f.featured));
  // A decision figure may carry band:true to render full-width BELOW its decision (for wide
  // diagrams illegible at the ~320px side-column width); the rest stay in the side column.
  eleventyConfig.addFilter("onlyBand", (figs) => (figs || []).filter((f) => f.band));
  eleventyConfig.addFilter("notBand", (figs) => (figs || []).filter((f) => !f.band));
  // A results OR foothold figure may carry featured:true to render full-width ABOVE its grid
  // (dense headline-evidence that would be illegible at ~300px grid-cell width).
  eleventyConfig.addFilter("onlyFeatured", (figs) => (figs || []).filter((f) => f.featured));
  eleventyConfig.addFilter("notFeatured", (figs) => (figs || []).filter((f) => !f.featured));

  // Build-time guard: a figure bound to a decision/foothold beat that does not resolve would
  // silently vanish from the page. Warn loudly instead.
  eleventyConfig.on("eleventy.before", () => {
    try {
      const fs = require("node:fs");
      const projects = yaml.load(fs.readFileSync("src/_data/projects.yaml", "utf8"));
      for (const p of projects || []) {
        const beats = new Set();
        (p.design_decisions || []).forEach((d) => { if (d.id) beats.add(d.id); if (d.title) beats.add(d.title); });
        (p.foothold || []).forEach((f) => { if (f.id) beats.add(f.id); if (f.claim) beats.add(f.claim); });
        (p.figures || []).forEach((f) => {
          // A decision figure must resolve to a beat. A beat set on any figure must resolve.
          // (foothold figures without a beat render generally under the table — that's fine.)
          if (f.beat !== undefined && !beats.has(f.beat)) {
            console.warn(`[figure-beat] ${p.slug}: figure ${f.src} -> unknown beat '${f.beat}'`);
          } else if (f.section === "decision" && f.beat === undefined) {
            console.warn(`[figure-beat] ${p.slug}: decision figure ${f.src} has no beat`);
          }
        });
      }
    } catch (e) { /* non-fatal: never block a build on the guard */ }
  });

  // ---------- Directory config ----------
  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: "/"
  };
};
