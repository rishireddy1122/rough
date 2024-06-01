// Select all elements needed
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const passwordref = document.querySelector("#password-confirmation");
const form = document.querySelector("#form");
const error = document.querySelector(".errors");
const errorlist = document.querySelector(".errors-list");
const checkbox = document.querySelector("#checkbox");

// Create an event listener for when the form is submitted
form.addEventListener("submit", e => {
    // Create an array to store all error messages and clear any old error messages
    const errorMsg = [];
    clearErrors();

    // Define the following validation checks with appropriate error messages
    // 1. Ensure the username is at least 6 characters long
    if (userName.value.length < 6) {
        errorMsg.push("Username must be at least 6 characters long.");
    }

    // 2. Ensure the password is at least 10 characters long
    if (password.value.length < 10) {
        errorMsg.push("Password must be at least 10 characters long.");
    }

    // 3. Ensure the password and confirmation password match
    if (passwordref.value !== password.value) {
        errorMsg.push("Confirmation password must match the password.");
    }

    // 4. Ensure the terms checkbox is checked
    if (!checkbox.checked) {
        errorMsg.push("You must agree to the terms and conditions.");
    }

    // If there are any errors, prevent the form from submitting and show the error messages
    if (errorMsg.length > 0) {
        e.preventDefault();
        showErrors(errorMsg);
    }
});

function clearErrors() {
    // Loop through all the children of the error-list element and remove them
    while (errorlist.firstChild) {
        errorlist.removeChild(errorlist.firstChild);
    }
    // Remove the 'show' class from the errors container
    error.classList.remove("show");
}

function showErrors(errorMessages) {
    // Add each error to the error-list element
    errorMessages.forEach(errorMessage => {
        const li = document.createElement("li");
        li.innerText = errorMessage;
        errorlist.appendChild(li);
    });

    // Add the 'show' class to the errors container
    error.classList.add("show");
}
