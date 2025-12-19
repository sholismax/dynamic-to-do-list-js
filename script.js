// Get form and input elements
const form = document.getElementById("myForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const errorBox = document.getElementById("errorMessages");

// This array will store all validation messages
let messages = [];

// This flag checks if the form is valid or not
let isValid = true;

// Listen for form submission
form.addEventListener("submit", function (e) {
  // Reset values on every submit
  messages = [];
  isValid = true;

  // Clear old errors
  errorBox.innerHTML = "";
  username.classList.remove("error");
  email.classList.remove("error");

  // Username validation
  if (username.value.trim() === "") {
    messages.push("Username is required");
    username.classList.add("error");
    isValid = false;
  }

  // Email validation
  if (email.value.trim() === "") {
    messages.push("Email is required");
    email.classList.add("error");
    isValid = false;
  }

  // If form is not valid, stop submission and show messages
  if (!isValid) {
    e.preventDefault();

    messages.forEach(function (message) {
      const p = document.createElement("p");
      p.textContent = message;
      errorBox.appendChild(p);
    });
  }
});
