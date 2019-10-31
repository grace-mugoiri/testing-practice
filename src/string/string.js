function capitalize(str) {
  if (!str || str.constructor !== String) throw new TypeError('Invalid type');
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  if (!str || str.constructor !== String) throw new TypeError('Invalid type');
  return str
    .split('')
    .reverse()
    .join('');
}

module.exports = {
  capitalize,
  reverseString,
};
