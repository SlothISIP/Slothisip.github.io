// Lightweight clipboard helper for .bib citation boxes (replaces clipboard.js).
// Usage: <button data-copy="#bibtex">Copy</button> next to <textarea id="bibtex">.
document.addEventListener("click", function (e) {
  var btn = e.target.closest("[data-copy]");
  if (!btn) return;
  var target = document.querySelector(btn.getAttribute("data-copy"));
  if (!target) return;
  var text = target.value !== undefined ? target.value : target.textContent;
  navigator.clipboard.writeText(text).then(function () {
    var prev = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(function () { btn.textContent = prev; }, 1500);
  });
});
