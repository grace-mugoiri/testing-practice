function analyze(arr) {
  if (
    !arr ||
    arr.constructor !== Array ||
    arr.length === 0 ||
    arr.some(num => num.constructor !== Number)
  ) {
    throw new TypeError('Invalid input');
  }
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
