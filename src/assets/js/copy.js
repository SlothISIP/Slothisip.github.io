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

// Before/after crossfade (.ba): hover/focus preview is pure CSS; this adds a
// sticky tap toggle for touch devices (no hover) and keyboard activation.
document.addEventListener("click", function (e) {
  var ba = e.target.closest(".ba");
  if (!ba) return;
  ba.classList.toggle("is-after");
});
document.addEventListener("keydown", function (e) {
  if (e.key !== "Enter" && e.key !== " ") return;
  var ba = e.target.closest(".ba");
  if (!ba) return;
  e.preventDefault();
  ba.classList.toggle("is-after");
});
