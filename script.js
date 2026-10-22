// Interactions de la page Pricing

const priceInput = document.getElementById("bookPrice");
const calculateButton = document.getElementById("calculateButton");
const calculationResult = document.getElementById("calculationResult");

calculateButton.addEventListener("click", function () {
  const initialPrice = Number(priceInput.value);

  if (priceInput.value.trim() === "" || !Number.isFinite(initialPrice) || initialPrice < 0) {
    calculationResult.textContent = "Please enter a valid price of $0 or more.";
    return;
  }

  const fee = initialPrice * 0.05;
  const finalPrice = initialPrice + fee;

  calculationResult.textContent =
    "Initial price: $" + initialPrice.toFixed(2) +
    " | 5% fee: $" + fee.toFixed(2) +
    " | Final price: $" + finalPrice.toFixed(2);
});

document.getElementById("agreementForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const checkbox = document.getElementById("agreeCheckbox");
  const message = document.getElementById("agreementMessage");

  if (checkbox.checked) {
    message.textContent = "Thank you! You have accepted the terms for this demo.";
  }
});

document.getElementById("agreeCheckbox").addEventListener("change", function () {
  document.getElementById("agreeButton").disabled = !this.checked;
  document.getElementById("agreementMessage").textContent = "";
});

document.getElementById("loginButton").addEventListener("click", function () {
  alert("Login page: connect this button to your team's login page when it is ready.");
});

document.getElementById("searchForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const searchTerm = document.getElementById("searchInput").value.trim();

  if (searchTerm === "") {
    alert("Please enter a book title to search.");
  } else {
    alert('Search for "' + searchTerm + '" will be connected to the book catalogue when it is ready.');
  }
});
