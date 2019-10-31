const { validArray } = require('./../utils/valid_check');

function analyze(arr) {
  validArray(arr);
  const result = {
    min: undefined,
    max: undefined,
    length: 0,
    average: undefined,
  };
  let sum = 0;
  arr.forEach((num) => {
    if (!result.min || result.min > num) result.min = num;
    if (!result.max || result.max < num) result.max = num;
    result.length += 1;
    sum += num;
  });
  result.average = sum / result.length;

  return result;
}
module.exports = analyze;
