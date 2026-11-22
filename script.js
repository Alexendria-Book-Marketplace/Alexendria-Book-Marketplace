/*  Recherche des membres */
const searchInput = document.getElementById("search");
const noResult = document.getElementById("no-result");

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


/*  Étagères de livres  */
const couleurs = ["#8A7042", "#F6F2EA", "#1B2122", "#35507A"];

function remplirEtagere(etagere) {
  // Nombre de livres selon la largeur de l'écran
  const nbLivres = Math.floor(window.innerWidth / 18) + 6;

  for (let i = 0; i < nbLivres; i++) {
    const livre = document.createElement("span");
    livre.className = "book";

    // Largeur entre 10 et 24 px, hauteur entre 38 et 72 px
    livre.style.width = 10 + Math.random() * 14 + "px";
    livre.style.height = 38 + Math.random() * 34 + "px";

    // Couleur au hasard dans la liste
    livre.style.background = couleurs[Math.floor(Math.random() * couleurs.length)];

    etagere.appendChild(livre);
  }
}

const etageres = document.querySelectorAll(".shelf");
for (let i = 0; i < etageres.length; i++) {
  remplirEtagere(etageres[i]);
}
