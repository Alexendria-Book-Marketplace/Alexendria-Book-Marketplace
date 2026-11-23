/* ALEXANDRIA — search results page.
   Reads ?q=...&genre=...&location=... from the address bar (the top-bar search form sends these),
   filters the listings in listings.js and draws the matching cards. */
(function () {
  // Lower-case, drop accents and punctuation so "orleans" finds Orléans and "charlottes" finds Charlotte’s
  function normalize(text) {
    return String(text)
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[’']/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function words(text) {
    var n = normalize(text);
    return n ? n.split(" ") : [];
  }

  // Every search word must appear somewhere in the listing.
  // Better matches (title, then author) come first; ties go to the chosen pickup area.
  function searchListings(list, options) {
    var terms = words(options.q || "");
    var genre = options.genre && options.genre !== "All genres" ? options.genre : "";
    var place = options.place || "";
    var found = [];

    list.forEach(function (l, index) {
      if (genre && l.genre !== genre) { return; }

      var title = normalize(l.title);
      var author = normalize(l.author);
      var rest = normalize([l.genre, l.format, l.condition, l.place, l.description].join(" "));
      var score = 0;

      for (var i = 0; i < terms.length; i++) {
        if (title.indexOf(terms[i]) !== -1) { score += 3; }
        else if (author.indexOf(terms[i]) !== -1) { score += 2; }
        else if (rest.indexOf(terms[i]) !== -1) { score += 1; }
        else { return; }
      }

      found.push({ listing: l, score: score, inArea: place && l.place === place ? 1 : 0, index: index });
    });

    found.sort(function (a, b) {
      return b.score - a.score || b.inArea - a.inArea || a.index - b.index;
    });
    return found.map(function (r) { return r.listing; });
  }

  window.searchListings = searchListings;

  // ----- Page wiring (only runs on the search page) -----
  function init() {
    var listEl = document.getElementById("listing-list");
    if (!listEl) { return; }

    var summary = document.getElementById("search-summary");
    var empty = document.getElementById("search-empty");
    var areaLabel = document.getElementById("area-toggle");
    var areaBox = document.getElementById("only-area");
    var areaName = document.getElementById("area-name");
    var clearLink = document.getElementById("search-clear");

    var params = new URLSearchParams(window.location.search);
    var q = (params.get("q") || "").trim();
    var genre = params.get("genre") || "";
    var place = params.get("location") || "";
    var genreFilter = genre && genre !== "All genres" ? genre : "";

    // The top bar always sends a location, so offer "only show this area" instead of hiding everything else
    if (place && areaLabel) {
      areaName.textContent = place;
      areaLabel.hidden = false;
    }

    function describe(count, onlyArea) {
      if (!q && !genreFilter && !onlyArea) {
        return "All " + count + " listings";
      }
      var text = count + (count === 1 ? " result" : " results");
      if (q) { text += " for \u201C" + q + "\u201D"; }
      if (genreFilter) { text += " in " + genreFilter; }
      if (onlyArea) { text += " with pickup in " + place; }
      return text;
    }

    // "Clear search" goes back to every listing (keeping the chosen pickup area)
    if (clearLink) {
      clearLink.href = "search.html?genre=" + encodeURIComponent("All genres") +
        (place ? "&location=" + encodeURIComponent(place) : "");
      clearLink.addEventListener("click", function (event) {
        if (!q && !genreFilter) {
          // only the "pickup in ..." box is on: reset it here instead of reloading the page
          event.preventDefault();
          if (areaBox) { areaBox.checked = false; }
          show();
        }
      });
    }

    function show() {
      var onlyArea = !!(areaBox && areaBox.checked && place);
      var results = searchListings(window.ALEXANDRIA_LISTINGS || [], { q: q, genre: genre, place: place });
      if (onlyArea) {
        results = results.filter(function (l) { return l.place === place; });
      }
      listEl.innerHTML = results.map(window.renderListing).join("\n");
      empty.hidden = results.length !== 0;
      summary.textContent = describe(results.length, onlyArea);
      if (clearLink) { clearLink.hidden = !(q || genreFilter || onlyArea); }
    }

    if (areaBox) { areaBox.addEventListener("change", show); }
    show();
  }

  if (typeof document !== "undefined") { init(); }
})();