/* =====================================================
   script.js : page d'équipe
   1. Recherche des membres
   2. Étagères de livres du bandeau
   ===================================================== */
 
const PALETTE = {
  creme: "#F6F2EA",
  or: "#8A7042",
  encre: "#1B2122",
  marine: "#22344F",
};
 
/* ---------- 1. Recherche ---------- */
const searchInput = document.querySelector('.search input[type="search"]');
const searchForm = document.querySelector(".search");
const noResult = document.getElementById("no-result");
 
function filterMembers() {
  const term = searchInput.value.trim().toLowerCase();
  const members = document.querySelectorAll(".member");
  let visible = 0;
 
  members.forEach((member) => {
    const name = member.querySelector("h2").textContent.toLowerCase();
    const bio = member.querySelector("p").textContent.toLowerCase();
    const match = name.includes(term) || bio.includes(term);
    member.hidden = !match;
    if (match) visible++;
  });
 
  noResult.hidden = visible > 0;
}
 
searchInput.addEventListener("input", filterMembers);
searchForm.addEventListener("submit", (e) => e.preventDefault());
 
/* ---------- 2. Étagères de livres ---------- */
function buildShelf(el, seed) {
  // Pseudo-aléatoire avec graine : même résultat à chaque chargement
  let s = seed;
  const rand = () => (s = (s * 16807) % 2147483647) / 2147483647;
 
  const colors = [PALETTE.or, PALETTE.creme, PALETTE.encre, "#35507a"];
  const count = Math.ceil(window.innerWidth / 18) + 6;
 
  for (let i = 0; i < count; i++) {
    const book = document.createElement("span");
    book.className = "book";
    book.style.width = 10 + Math.floor(rand() * 14) + "px";
    book.style.height = 38 + Math.floor(rand() * 34) + "px";
    book.style.background = colors[Math.floor(rand() * colors.length)];
    el.appendChild(book);
  }
}
 
function buildShelves() {
  document.querySelectorAll(".shelf").forEach((shelf, i) => {
    shelf.innerHTML = "";
    buildShelf(shelf, 42 + i * 97);
  });
}
 
/* ---------- Démarrage ---------- */
buildShelves();
 
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(buildShelves, 200);
});