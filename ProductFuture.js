function toggleDetails(id, button) {
  let details = document.getElementById(id);

  if (details.style.display == "none") {
    details.style.display = "block";
    button.textContent = "Show less";
    button.classList.add("open");
  } else {
    details.style.display = "none";
    button.textContent = "Learn more";
    button.classList.remove("open");
  }
}

const header = document.getElementById("header");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search");

window.addEventListener("scroll", function () {
  if (window.scrollY > 4) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

searchForm.addEventListener("submit", function (event) {
  if (searchInput.value == "") {
    event.preventDefault();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key == "/" && document.activeElement != searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
});
