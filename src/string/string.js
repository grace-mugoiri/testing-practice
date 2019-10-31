const { validString } = require('./../utils/valid_check');

function capitalize(str) {
  validString(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  validString(str);
  return str
    .split('')
    .reverse()
    .join('');
}

module.exports = {
  capitalize,
  reverseString,
};
