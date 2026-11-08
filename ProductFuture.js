function toggleDetails(id, button) {
    var details = document.getElementById(id);

    if (details.style.display == "none") {
        details.style.display = "block";
        button.textContent = "Show less";
        button.setAttribute("aria-expanded", "true");
    } else {
        details.style.display = "none";
        button.textContent = "Learn more";
        button.setAttribute("aria-expanded", "false");
    }
}
