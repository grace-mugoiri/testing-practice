const {
  validNumber, zeroDivisionCheck,
} = require('./../utils/valid_check');

const calculator = {
  validCheck(a, b) {
    validNumber(a);
    validNumber(b);
  },
  add(x, y = 0) {
    this.validCheck(x, y);
    return x + y;
  },
  subtract(x, y = 0) {
    this.validCheck(x, y);
    return x - y;
  },
  multiply(x, y = 1) {
    this.validCheck(x, y);
    return x * y;
  },
  divide(x, y = 1) {
    this.validCheck(x, y);
    zeroDivisionCheck(x, y);
    return Math.round((x / y) * 100) / 100;
  },
};

module.exports = calculator;
