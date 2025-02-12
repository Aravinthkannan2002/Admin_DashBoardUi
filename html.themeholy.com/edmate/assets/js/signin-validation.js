document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signin-form");
    const emailInput = document.getElementById("fname");
    const passwordInput = document.getElementById("current-password");
    const signInButton = document.getElementById("signin-btn");

    // Email regex pattern
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate input fields
    function validateInput() {
        clearErrors();
        let valid = true;

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate email
        if (email === "") {
            showError(emailInput, "Email is required.");
            valid = false;
        } else if (!emailRegex.test(email)) {
            showError(emailInput, "Enter a valid Email address.");
            valid = false;
        }

        // Validate password
        if (password === "") {
            showError(passwordInput, "Password is required.");
            valid = false;
        } else if (password.length < 6) {
            showError(passwordInput, "Password must be at least 6 characters.");
            valid = false;
        }

        // Enable or disable button based on validation
        signInButton.disabled = !valid;
        return valid;
    }

    // Event listeners for live validation
    emailInput.addEventListener("input", validateInput);
    passwordInput.addEventListener("input", validateInput);

    // Submit button click event
    signInButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        if (validateInput()) {
            window.location.href = "index.html"; // Redirect on success
        }
    });

    // Show error function
    function showError(input, message) {
        let errorElement = input.parentNode.querySelector(".error-message");
        if (!errorElement) {
            errorElement = document.createElement("small");
            errorElement.className = "error-message text-danger d-block mt-2";
            input.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }

    // Clear all error messages
    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(el => el.remove());
    }
});
