(function () {
  "use strict";

  var root = document.querySelector(".project-detail");
  if (!root) return;

  var dialog = document.createElement("dialog");
  dialog.className = "image-viewer";
  dialog.setAttribute("aria-label", "Enlarged project image");
  dialog.setAttribute("aria-describedby", "image-viewer-caption");
  dialog.innerHTML = [
    '<div class="image-viewer__shell">',
    '  <div class="image-viewer__toolbar">',
    '    <span class="image-viewer__title">Image preview</span>',
    '    <div class="image-viewer__actions">',
    '      <button class="image-viewer__button image-viewer__size" type="button" aria-pressed="false">Actual size</button>',
    '      <button class="image-viewer__button image-viewer__close" type="button" aria-label="Close image preview">&times;</button>',
    "    </div>",
    "  </div>",
    '  <div class="image-viewer__stage">',
    '    <img class="image-viewer__image" alt="">',
    "  </div>",
    '  <p class="image-viewer__caption" id="image-viewer-caption"></p>',
    "</div>"
  ].join("");
  document.body.appendChild(dialog);

  var viewerImage = dialog.querySelector(".image-viewer__image");
  var caption = dialog.querySelector(".image-viewer__caption");
  var sizeButton = dialog.querySelector(".image-viewer__size");
  var closeButton = dialog.querySelector(".image-viewer__close");
  var lastTrigger = null;

  function largestSource(img) {
    var srcset = img.getAttribute("srcset") || "";
    var candidates = srcset.split(",").map(function (item) {
      var parts = item.trim().split(/\s+/);
      return { url: parts[0], width: parseInt(parts[1], 10) || 0 };
    }).filter(function (item) { return item.url; });
    candidates.sort(function (a, b) { return a.width - b.width; });
    return candidates.length ? candidates[candidates.length - 1].url : img.getAttribute("src");
  }

  function setActualSize(enabled) {
    dialog.classList.toggle("is-actual", enabled);
    sizeButton.setAttribute("aria-pressed", String(enabled));
    sizeButton.textContent = enabled ? "Fit to screen" : "Actual size";
  }

  function openViewer(img) {
    var figure = img.closest("figure");
    var figureCaption = figure && figure.querySelector("figcaption");
    var width = parseInt(img.getAttribute("width"), 10) || img.naturalWidth || 1280;
    var height = parseInt(img.getAttribute("height"), 10) || img.naturalHeight || 720;

    lastTrigger = img;
    viewerImage.src = largestSource(img);
    viewerImage.alt = img.alt || "Project image";
    viewerImage.width = width;
    viewerImage.height = height;
    viewerImage.style.setProperty("--viewer-width", width + "px");
    caption.textContent = figureCaption ? figureCaption.textContent.trim() : viewerImage.alt;
    setActualSize(false);

    document.body.classList.add("image-viewer-open");
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
      closeButton.focus();
    } else {
      window.open(viewerImage.src, "_blank", "noopener");
      document.body.classList.remove("image-viewer-open");
    }
  }

  root.querySelectorAll("figure img").forEach(function (img) {
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-haspopup", "dialog");
    img.setAttribute("aria-label", "Enlarge image: " + (img.alt || "project image"));
    img.title = "Open enlarged image";

    var width = parseInt(img.getAttribute("width"), 10) || img.naturalWidth;
    var height = parseInt(img.getAttribute("height"), 10) || img.naturalHeight;
    if (width && height && width / height >= 2.65) {
      var figure = img.closest("figure");
      if (figure) figure.classList.add("is-wide-zoom");
    }
  });
  root.classList.add("is-image-viewer-ready");

  root.addEventListener("click", function (event) {
    var img = event.target.closest("figure img");
    if (!img || !root.contains(img)) return;
    event.preventDefault();
    openViewer(img);
  });

  root.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    var img = event.target.closest("figure img");
    if (!img || !root.contains(img)) return;
    event.preventDefault();
    openViewer(img);
  });

  sizeButton.addEventListener("click", function () {
    setActualSize(!dialog.classList.contains("is-actual"));
  });
  closeButton.addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", function () {
    document.body.classList.remove("image-viewer-open");
    setActualSize(false);
    viewerImage.removeAttribute("src");
    if (lastTrigger) lastTrigger.focus({ preventScroll: true });
  });
})();
