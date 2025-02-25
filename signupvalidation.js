 const form = document.getElementById('signupForm');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const successMessage = document.getElementById('successMessage');

        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent actual form submission

            successMessage.classList.remove('show-message') // Hide the success message

            if (password.value !== confirmPassword.value) {
                alert('Passwords do not match!');
            } else if (!password.checkValidity()) {
                alert(password.title);
            } else {
                successMessage.classList.add('show-message'); // Show the success message
                form.reset(); // Clear the form fields after successful submission
            }
        });