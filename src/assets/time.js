// Progressive enhancement for <time class="ago" datetime="…"> elements.
// Server renders the author's local time with a zone label (works with no JS).
// Here we localize each timestamp to the READER: the visible text becomes a
// short relative age ("2h ago"), and hovering shows the reader's own local
// date/time. The datetime attribute is an absolute instant, so this is exact.
(function () {
  function relative(then, now) {
    var s = Math.round((now - then) / 1000);
    if (s < 0) return "just now";
    if (s < 45) return "just now";
    var m = Math.round(s / 60);
    if (m < 60) return m + "m ago";
    var h = Math.round(m / 60);
    if (h < 24) return h + "h ago";
    var d = Math.round(h / 24);
    if (d < 30) return d + "d ago";
    var mo = Math.round(d / 30);
    if (mo < 12) return mo + "mo ago";
    return Math.round(mo / 12) + "y ago";
  }

  function readerLocal(dt) {
    try {
      return new Intl.DateTimeFormat(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      }).format(dt);
    } catch (e) {
      return dt.toString();
    }
  }

  function enhance() {
    var now = Date.now();
    var nodes = document.querySelectorAll("time.ago[datetime]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var dt = new Date(el.getAttribute("datetime"));
      if (isNaN(dt.getTime())) continue;
      el.title = readerLocal(dt); // hover: the reader's own local time, exact
      el.textContent = relative(dt.getTime(), now); // visible: short relative age
    }
  }

  if (document.readyState !== "loading") enhance();
  else document.addEventListener("DOMContentLoaded", enhance);
})();
