const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMsg = document.getElementById('successMsg');

function validateEmail(email) {
    // Simple regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', function (event) {
    let valid = true;
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMsg.textContent = '';

    // Validate Name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        valid = false;
    }

    // Validate Email
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email format.';
        valid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Message is required.';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
        return;
    }

    // Show success message (no actual sending)
    successMsg.textContent = 'Form submitted successfully!';
    event.preventDefault();
    form.reset();
});