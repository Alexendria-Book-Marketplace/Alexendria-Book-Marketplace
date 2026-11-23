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
