document.getElementById('password').addEventListener('input', validatePassword);

function validatePassword() {
    const password = document.getElementById('password').value;
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /[0-9]/.test(password);
    const specialCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    updateUI('length', lengthCriteria);
    updateUI('uppercase', uppercaseCriteria);
    updateUI('lowercase', lowercaseCriteria);
    updateUI('number', numberCriteria);
    updateUI('special', specialCriteria);

    updateStrengthMeter(lengthCriteria, uppercaseCriteria, lowercaseCriteria, numberCriteria, specialCriteria);
}

function updateUI(elementId, isValid) {
    const element = document.getElementById(elementId);
    if (isValid) {
        element.classList.remove('invalid');
        element.classList.add('valid');
    } else {
        element.classList.remove('valid');
        element.classList.add('invalid');
    }
}

function updateStrengthMeter(length, uppercase, lowercase, number, special) {
    const strengthBar = document.getElementById('strength-bar');
    const criteria = [length, uppercase, lowercase, number, special];
    const validCount = criteria.filter(Boolean).length;

    const strengthColors = ['red', 'orange', 'yellow', 'blue', 'green'];
    strengthBar.style.width = (validCount / criteria.length) * 100 + '%';
    strengthBar.style.backgroundColor = strengthColors[validCount - 1] || 'red';
}

function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}