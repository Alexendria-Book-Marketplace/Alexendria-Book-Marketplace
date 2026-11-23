/* ALEXANDRIA — shared top bar behaviour (search box, genre/location menus, scroll shadow).
   Linked from every page. */
(function () {
  var header = document.getElementById("site-header");
  var form = document.getElementById("search-form");
  var query = document.getElementById("search");
  var genre = document.getElementById("genre");
  var place = document.getElementById("location");

  // Shadow under the sticky top bar once the page scrolls
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 4);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (!form || !query) { return; }

  // Remember the last genre and location (storage can be blocked, so guard it)
  function remember(select, key) {
    if (!select) { return; }
    try {
      var saved = localStorage.getItem(key);
      if (saved) {
        for (var i = 0; i < select.options.length; i++) {
          if (select.options[i].value === saved) { select.value = saved; break; }
        }
      }
    } catch (e) { /* ignore */ }
    select.addEventListener("change", function () {
      try { localStorage.setItem(key, select.value); } catch (e) { /* ignore */ }
    });
  }
  remember(genre, "alexandria:genre");
  remember(place, "alexandria:location");

  // On the search results page, show what was searched for (the address bar wins over the remembered menus)
  var params = new URLSearchParams(window.location.search);
  function pick(select, value) {
    if (!select || !value) { return; }
    for (var i = 0; i < select.options.length; i++) {
      if (select.options[i].value === value) { select.value = value; break; }
    }
  }
  if (params.has("q")) { query.value = params.get("q"); }
  pick(genre, params.get("genre"));
  pick(place, params.get("location"));
  try {
    if (genre && params.has("genre")) { localStorage.setItem("alexandria:genre", genre.value); }
    if (place && params.has("location")) { localStorage.setItem("alexandria:location", place.value); }
  } catch (e) { /* ignore */ }

  // Don't send an empty search
  form.addEventListener("submit", function (event) {
    if (query.value.trim() === "") {
      event.preventDefault();
      query.focus();
    }
  });

  // Press "/" to jump to the search box (unless already typing somewhere)
  document.addEventListener("keydown", function (event) {
    var tag = (event.target.tagName || "").toLowerCase();
    var typing = tag === "input" || tag === "textarea" || tag === "select" || event.target.isContentEditable;
    if (event.key === "/" && !typing && !event.metaKey && !event.ctrlKey && !event.altKey) {
      event.preventDefault();
      query.focus();
    }
  });
})();