// /progress/ — reveal a day's posts inline when its heatmap cell is clicked.
// No-JS fallback: each active cell is a link to that day's archive; here we
// intercept the click and show the posts in a panel instead of navigating.
(function () {
  var dataEl = document.getElementById("progress-data");
  var detail = document.getElementById("cal-detail");
  var grid = document.querySelector(".cal__grid");
  if (!dataEl || !detail || !grid) return;

  var byDay = JSON.parse(dataEl.textContent || "{}");
  var selected = null;

  function fmtDate(iso) {
    var d = new Date(iso + "T12:00:00");
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function typeLabel(t) {
    return t === "link" ? "↗ " : t === "quote" ? "“ ” " : "";
  }

  function close() {
    detail.hidden = true;
    detail.innerHTML = "";
    if (selected) {
      selected.classList.remove("cal__day--selected");
      selected = null;
    }
  }

  function show(cell) {
    var iso = cell.getAttribute("data-date");
    var posts = byDay[iso] || [];
    if (selected === cell) {
      close();
      return;
    }
    if (selected) selected.classList.remove("cal__day--selected");
    selected = cell;
    cell.classList.add("cal__day--selected");

    var items = posts
      .map(function (p) {
        return (
          '<li><a href="' +
          p.url +
          '">' +
          typeLabel(p.type) +
          escapeHtml(p.title) +
          "</a></li>"
        );
      })
      .join("");

    detail.innerHTML =
      '<div class="cal-detail__head">' +
      '<h2 class="cal-detail__title">' +
      fmtDate(iso) +
      " · " +
      posts.length +
      " post" +
      (posts.length === 1 ? "" : "s") +
      "</h2>" +
      '<button type="button" class="cal-detail__close" aria-label="Close">×</button>' +
      "</div>" +
      '<ul class="cal-detail__list">' +
      items +
      "</ul>";
    detail.hidden = false;
    detail
      .querySelector(".cal-detail__close")
      .addEventListener("click", close);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c];
    });
  }

  grid.addEventListener("click", function (e) {
    var cell = e.target.closest("a.cal__day[data-date]");
    if (!cell) return;
    e.preventDefault();
    show(cell);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
})();
