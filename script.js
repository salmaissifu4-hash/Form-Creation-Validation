document.addEventListener('DOMContentLoaded', function () {
  // Form and feedback div selection
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent actual form submit

    // Input retrieval and trimming
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation variables
    let isValid = true;
    const messages = [];

    // Username validation: at least 3 characters
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email validation: must include '@' and '.'
    if (!(email.includes('@') && email.includes('.'))) {
      isValid = false;
      messages.push("Email must include both '@' and '.'.");
    }

    // Password validation: at least 8 characters
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Display feedback
    feedbackDiv.style.display = 'block';

    if (isValid) {
      // success message
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745';       // green text (per requirement)
      feedbackDiv.style.backgroundColor = '#d4edda'; // subtle green background for success
      // Optionally clear form:
      // form.reset();
    } else {
      // show all error messages separated by line breaks
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545';       // red text
      feedbackDiv.style.backgroundColor = '#ffbaba'; // light red background
      // set focus on first invalid field for UX
      if (username.length < 3) {
        document.getElementById('username').focus();
      } else if (!(email.includes('@') && email.includes('.'))) {
        document.getElementById('email').focus();
      } else {
        document.getElementById('password').focus();
      }
    }
  });
});
