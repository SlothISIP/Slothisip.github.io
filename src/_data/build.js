// Build-time data (runs in Node during the eleventy build).
module.exports = () => ({ year: new Date().getFullYear() });
