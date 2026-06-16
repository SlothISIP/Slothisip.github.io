// .eleventy.js - Eleventy 3.x config (CommonJS)
const path = require("node:path");
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  // ---------- YAML data files (.yaml/.yml are NOT parsed by default in 3.x) ----------
  eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

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
  // screenshots); SVGs pass through as vector via svgShortCircuit.
  eleventyConfig.addAsyncShortcode("image", (src, alt, widths = [768, 1280], sizes = "100vw", className = "") =>
    buildImage(src, [...new Set(widths)], sizes, { alt, sizes, loading: "lazy", decoding: "async", class: className }, ["svg", "webp"])
  );
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

  // ---------- Directory config ----------
  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: "/"
  };
};
