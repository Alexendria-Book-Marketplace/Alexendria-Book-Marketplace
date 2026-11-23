/* ALEXANDRIA — listing data and card markup.
   Shared by marketplace.html (shows everything) and search.html (shows matches).
   To add a listing, add another { ... } to the list below. */
(function () {
  var listings = [
    {
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": "Fiction",
      "format": "Paperback",
      "edition": "2012",
      "language": "English",
      "condition": "Good",
      "price": 6,
      "place": "Ottawa",
      "seller": "Maya L.",
      "since": "2025",
      "rating": "4.9",
      "sales": 18,
      "listed": "Nov 18, 2026",
      "color": "#7A3E3E",
      "description": "Bought for a first-year English course and only needed it for one term. The pages are clean with no highlighting, and the cover has light wear on the corners. Happy to meet at a public place in Ottawa."
    },
    {
      "title": "The Hound of the Baskervilles",
      "author": "Arthur Conan Doyle",
      "genre": "Mystery",
      "format": "Hardcover",
      "edition": "1998",
      "language": "English",
      "condition": "Very good",
      "price": 12,
      "place": "Kanata",
      "seller": "Daniel R.",
      "since": "2024",
      "rating": "5.0",
      "sales": 41,
      "listed": "Nov 17, 2026",
      "color": "#3F5B4B",
      "description": "A sturdy hardcover with its dust jacket. The jacket has a small tear at the top of the spine and there is a name written inside the front cover. Everything else is clean and the binding is tight."
    },
    {
      "title": "Dune",
      "author": "Frank Herbert",
      "genre": "Science fiction",
      "format": "Paperback",
      "edition": "2005",
      "language": "English",
      "condition": "Acceptable",
      "price": 8,
      "place": "Gatineau",
      "seller": "Sophie T.",
      "since": "2026",
      "rating": "4.7",
      "sales": 6,
      "listed": "Nov 15, 2026",
      "color": "#9A7B3C",
      "description": "A well-read copy. The spine is creased and the cover is soft from handling, but every page is there and easy to read. There are a few pencil notes in the margins of the first chapters. Priced low for the wear."
    },
    {
      "title": "Sapiens",
      "author": "Yuval Noah Harari",
      "genre": "History",
      "format": "Paperback",
      "edition": "2015",
      "language": "English",
      "condition": "Like new",
      "price": 15,
      "place": "Orléans",
      "seller": "Amir K.",
      "since": "2025",
      "rating": "4.8",
      "sales": 22,
      "listed": "Nov 14, 2026",
      "color": "#2F5D62",
      "description": "Read once and kept on a shelf. No marks, no creases, and the spine is still tight. I can throw in a bookmark."
    },
    {
      "title": "Becoming",
      "author": "Michelle Obama",
      "genre": "Biography",
      "format": "Hardcover",
      "edition": "2018",
      "language": "English",
      "condition": "Good",
      "price": 14,
      "place": "Ottawa",
      "seller": "Priya N.",
      "since": "2024",
      "rating": "4.9",
      "sales": 35,
      "listed": "Nov 12, 2026",
      "color": "#5B3F5E",
      "description": "Hardcover with the jacket, kept in a smoke-free, pet-free home. One page has a small coffee ring near the bottom edge; otherwise it is clean."
    },
    {
      "title": "Charlotte’s Web",
      "author": "E. B. White",
      "genre": "Children",
      "format": "Paperback",
      "edition": "2001",
      "language": "English",
      "condition": "Good",
      "price": 5,
      "place": "Kanata",
      "seller": "Jordan P.",
      "since": "2025",
      "rating": "4.6",
      "sales": 11,
      "listed": "Nov 10, 2026",
      "color": "#4A5568",
      "description": "Our kids loved this one and have moved on to chapter books. The cover is a little scuffed and there is a crayon mark on one inside page. Still a great read-aloud copy."
    },
    {
      "title": "And Then There Were None",
      "author": "Agatha Christie",
      "genre": "Mystery",
      "format": "Paperback",
      "edition": "2011",
      "language": "English",
      "condition": "Good",
      "price": 7,
      "place": "Ottawa",
      "seller": "Lena M.",
      "since": "2024",
      "rating": "4.9",
      "sales": 29,
      "listed": "Nov 9, 2026",
      "color": "#6B4A2F",
      "description": "A pocket-sized paperback in good shape. The page edges have yellowed a little, but there is no writing or highlighting. Easy to carry on the bus."
    },
    {
      "title": "The Left Hand of Darkness",
      "author": "Ursula K. Le Guin",
      "genre": "Science fiction",
      "format": "Paperback",
      "edition": "2017",
      "language": "English",
      "condition": "Very good",
      "price": 9,
      "place": "Gatineau",
      "seller": "Noah B.",
      "since": "2026",
      "rating": "5.0",
      "sales": 4,
      "listed": "Nov 7, 2026",
      "color": "#22344F",
      "description": "Very clean for a well-loved book. The spine is slightly sun-faded, the pages are tight and there is no underlining. Happy to hold it for a few days if you can’t pick it up right away."
    },
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Fiction",
      "format": "Hardcover",
      "edition": "1993",
      "language": "English",
      "condition": "Acceptable",
      "price": 10,
      "place": "Orléans",
      "seller": "Chloé D.",
      "since": "2025",
      "rating": "4.5",
      "sales": 9,
      "listed": "Nov 5, 2026",
      "color": "#8A5A2B",
      "description": "A former school copy. It has a stamp on the first page and a few dog-eared corners, but the text block is solid and fully readable. Good for a first read or a classroom set."
    },
    {
      "title": "The Diary of a Young Girl",
      "author": "Anne Frank",
      "genre": "Biography",
      "format": "Paperback",
      "edition": "2010",
      "language": "English",
      "condition": "Good",
      "price": 6,
      "place": "Ottawa",
      "seller": "Ethan W.",
      "since": "2024",
      "rating": "4.8",
      "sales": 17,
      "listed": "Nov 2, 2026",
      "color": "#3A4F6B",
      "description": "A paperback with a clean text block and a lightly creased cover. A few sentences are highlighted in yellow in the first 50 pages. Pickup in Ottawa, evenings or weekends."
    }
  ];

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // The HTML for one listing card
  function renderListing(l) {
    return '<details class="listing" style="--cover: ' + esc(l.color) + '">\n' +
      '  <summary>\n' +
      '    <span class="listing__cover" aria-hidden="true"></span>\n' +
      '    <span class="listing__main">\n' +
      '      <span class="listing__title">' + esc(l.title) + '</span>\n' +
      '      <span class="listing__author">' + esc(l.author) + '</span>\n' +
      '    </span>\n' +
      '    <span class="listing__meta">\n' +
      '      <span class="listing__badge">Condition: <strong>' + esc(l.condition) + '</strong></span>\n' +
      '      <span class="listing__loc">' + esc(l.place) + '</span>\n' +
      '      <span class="listing__price">$' + esc(l.price) + '</span>\n' +
      '    </span>\n' +
      '    <span class="listing__chevron" aria-hidden="true"></span>\n' +
      '  </summary>\n' +
      '\n' +
      '  <div class="listing__more">\n' +
      '    <div>\n' +
      '      <p class="listing__desc">' + esc(l.description) + '</p>\n' +
      '      <p class="listing__seller"><strong>Sold by ' + esc(l.seller) + '</strong>Member since ' + esc(l.since) + ' &middot; ' + esc(l.rating) + ' &#9733; from ' + esc(l.sales) + ' sales</p>\n' +
      '    </div>\n' +
      '\n' +
      '    <dl class="listing__facts">\n' +
      '      <dt>Author</dt><dd>' + esc(l.author) + '</dd>\n' +
      '      <dt>Genre</dt><dd>' + esc(l.genre) + '</dd>\n' +
      '      <dt>Format</dt><dd>' + esc(l.format) + '</dd>\n' +
      '      <dt>Edition year</dt><dd>' + esc(l.edition) + '</dd>\n' +
      '      <dt>Language</dt><dd>' + esc(l.language) + '</dd>\n' +
      '      <dt>Condition</dt><dd>' + esc(l.condition) + '</dd>\n' +
      '      <dt>Pickup</dt><dd>' + esc(l.place) + '</dd>\n' +
      '      <dt>Listed</dt><dd>' + esc(l.listed) + '</dd>\n' +
      '    </dl>\n' +
      '\n' +
      '    <div class="listing__actions">\n' +
      '      <a class="btn" href="account.html">Sign in to message the seller</a>\n' +
      '      <small>$' + esc(l.price) + ' &middot; payment and pickup are arranged with the seller.</small>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</details>';
  }

  window.ALEXANDRIA_LISTINGS = listings;
  window.renderListing = renderListing;
})();