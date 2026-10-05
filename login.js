/* Login form (demo): only checks the input, nothing is saved */

var form = document.getElementById('login-form');
var message = document.getElementById('message');

form.addEventListener('submit', function (event) {
  event.preventDefault();          // stop the page from reloading

  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value;

  message.style.display = 'block';

  if (email.indexOf('@') === -1) {
    message.textContent = 'Please enter a valid email address.';
    message.className = 'result error';
  } else if (password.length < 6) {
    message.textContent = 'Your password needs at least 6 characters.';
    message.className = 'result error';
  } else {
    message.textContent = 'Login successful! Welcome to FitPulse.';
    message.className = 'result success';
  }
});
