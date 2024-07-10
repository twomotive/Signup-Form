document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = document.querySelector("#btn button");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        if (validateForm()) {
            form.submit();
        }
    });

    function validateForm() {
        let isValid = true;

        // First Name validation
        const firstName = document.getElementById("first_name");
        if (firstName.value.trim() === "") {
            showError(firstName, "First name is required");
            isValid = false;
        } else {
            removeError(firstName);
        }

        // Last Name Validation

        const lastName = document.getElementById("last_name");
        if (lastName.value.trim() === "") {
            showError(lastName, "Last name is required");
            isValid = false;
        } else {
            removeError(lastName);
        }

        //Email Validation

        const email = document.getElementById("user_email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        } else {
            removeError(email);
        }

        //Password Validation

        const password = document.getElementById('user_password');
        const confirmPassword = document.getElementById('user_password_confirm');
        if (password.value.length < 8) {
            showError(password, 'Password must be at least 8 characters long');
            isValid = false;
        } else if (password.value !== confirmPassword.value) {
            showError(confirmPassword, 'Passwords do not match');
            isValid = false;
        } else {
            removeError(password);
            removeError(confirmPassword);
        }

        return isValid;
    }

    function showError(input, message) {
        const formGroup = input.closest(".form-group");
        const error =
            formGroup.querySelector(".error-message") ||
            document.createElement("div");
        error.className = "error-message";
        error.textContent = message;
        if (!formGroup.querySelector(".error-message")) {
            formGroup.appendChild(error);
        }
        input.classList.add("error");
    }

    function removeError(input) {
        const formGroup = input.closest(".form-group");
        const error = formGroup.querySelector(".error-message");
        if (error) {
            formGroup.removeChild(error);
        }
        input.classList.remove("error");
    }

});
