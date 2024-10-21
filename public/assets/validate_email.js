export default function validateEmail(email) {
  const isValid = email;

  if (isValid.includes('@') && isValid.includes('.')) {
    if (isValid.charAt(isValid.indexOf('@') + 1) === '.') {
      return false;
    }
    if (isValid.split('@').length - 1 > 1) {
      return false;
    }
    return true;
  }
  return false;
}
