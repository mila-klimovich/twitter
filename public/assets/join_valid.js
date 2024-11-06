/* global document */
import validateEmail from './validate_email.js';

document.querySelector('#regBtn').addEventListener('click', () => {
  const errorMessage = document.getElementById('errorEmpty');
  if (
    document.getElementById('emailReg').value === '' || document.getElementById('passwordReg').value === '' || document.getElementById('passwordRegConfirm').value === ''
  ) {
    document.getElementById('errorEmpty').classList.add('active');
  } else if (
    document.getElementById('passwordReg').value !== document.getElementById('passwordRegConfirm').value
  ) {
    document.getElementById('errorEmpty').classList.remove('active');
    errorMessage.textContent = 'Please fill in matching passwords!';
    document.getElementById('errorEmpty').classList.add('active');
  } else if (!validateEmail(document.getElementById('emailReg').value)) {
    document.getElementById('errorEmpty').classList.remove('active');
    errorMessage.textContent = 'Email address is invalid!';
    document.getElementById('errorEmpty').classList.add('active');
  } else {
    document.getElementById('errorEmpty').classList.remove('active');
    console.log(`email is ${document.getElementById('emailReg').value}, password is ${document.getElementById('passwordReg').value}, confirmed password is ${document.getElementById('passwordReg').value}, confirmed password is ${document.getElementById('passwordRegConfirm').value}`);
  }
});
