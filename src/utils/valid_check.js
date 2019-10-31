function validArray(arr) {
  if (
    !arr ||
    arr.constructor !== Array ||
    arr.length === 0 ||
    arr.some(num => num.constructor !== Number)
  ) {
    throw new TypeError('Invalid input');
  }
}

function validString(str) {
  if (!str || str.constructor !== String) {
    throw new TypeError('Invalid input');
  }
}

function validNumber(number) {
  if (number.constructor !== Number) {
    throw new TypeError('Invalid input');
  }
}

function zeroDivisionCheck(_, divider) {
  if (divider === 0) {
    throw new Error('Zero division');
  }
}

module.exports = {
  validArray,
  validString,
  validNumber,
  zeroDivisionCheck,
};
