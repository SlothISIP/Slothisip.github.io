// Only publications that have a dedicated detail page (detail: true).
// Drives /publications/<slug>/ pagination and the sitemap.
const fs = require("node:fs");
const yaml = require("js-yaml");

module.exports = () => {
  const pubs = yaml.load(fs.readFileSync("src/_data/publications.yaml", "utf8"));
  return Array.isArray(pubs) ? pubs.filter((p) => p.detail === true) : [];
};
