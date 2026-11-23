/*  Recherche des membres */
const searchInput = document.getElementById("search");
const noResult = document.getElementById("no-result");

// Sur cette page, la recherche du haut filtre seulement les membres (pas de changement de page)
document.getElementById("search-form").addEventListener("submit", function (event) {
  event.preventDefault();
});

searchInput.addEventListener("input", function () {
  const texte = searchInput.value.toLowerCase();
  const membres = document.querySelectorAll(".member");
  let nbVisibles = 0;

  for (let i = 0; i < membres.length; i++) {
    // On regarde le contenu du membre (nom + présentation)
    const contenu = membres[i].textContent.toLowerCase();

    if (contenu.includes(texte)) {
      membres[i].style.display = "flex";   // on montre
      nbVisibles++;
    } else {
      membres[i].style.display = "none";   // on cache
    }
  }

  // Message "aucun résultat" si personne ne correspond
  noResult.hidden = nbVisibles > 0;
});