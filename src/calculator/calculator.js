const calculator = {
  validCheck(a, b) {
    if (a.constructor !== Number || b.constructor !== Number) {
      throw new TypeError('Invalid input');
    }
  },
  zeroDivisionCheck(_, divider) {
    if (!divider || divider === 0) {
      throw new Error('Zero division');
    }
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
    this.zeroDivisionCheck(x, y);
    return Math.round((x / y) * 100) / 100;
  },
};

module.exports = calculator;
