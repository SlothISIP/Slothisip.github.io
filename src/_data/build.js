// Build-time data (runs in Node during the eleventy build).
module.exports = () => {
  const now = new Date();
  return { year: now.getFullYear(), date: now.toISOString().slice(0, 10) };
};
