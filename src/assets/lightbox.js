// In-page image expand. Post images render as <a class="lightbox" href="ORIGINAL">
// <img src="OPTIMIZED"></a>: the lightweight optimized rendition inline, the full
// original behind the click. GLightbox binds to those anchors and opens the
// original in an overlay (same window; Esc / click-away / arrows to close/cycle).
// The library (~70 KB) is pulled in ONLY when the page actually has such an image
// (post pages, the home feed) — image-less pages (archives, tags) pay nothing.
// With JS off, the anchor is a plain link to the full image.
(function () {
  if (!document.querySelector("a.lightbox")) return;

  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "/assets/glightbox.min.css";
  document.head.appendChild(css);

  var js = document.createElement("script");
  js.src = "/assets/glightbox.min.js";
  js.onload = function () {
    GLightbox({ selector: "a.lightbox" });
  };
  document.body.appendChild(js);
})();
