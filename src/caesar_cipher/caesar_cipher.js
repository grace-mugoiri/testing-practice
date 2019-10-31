const {
  validString, validNumber,
} = require('./../utils/valid_check');

function mod(a, b) {
  return a % b;
}

function codeOfChar(str) {
  return str.charCodeAt(0);
}

function shiftChar(char, shift) {
  let code = codeOfChar(char);
  const alphabetLength = codeOfChar('z') - codeOfChar('a') + 1;
  if (code >= codeOfChar('a') && code <= codeOfChar('z')) {
    code =
      mod(code - codeOfChar('a') + shift, alphabetLength) + codeOfChar('a');
  } else if (code >= codeOfChar('A') && code <= codeOfChar('Z')) {
    code =
      mod(code - codeOfChar('A') + shift, alphabetLength) + codeOfChar('A');
  }
  return String.fromCharCode(code);
}

function caesarCipher(message, shift) {
  validString(message);
  validNumber(shift);
  return message
    .split('')
    .map(char => shiftChar(char, shift))
    .join('');
}

module.exports = caesarCipher;
