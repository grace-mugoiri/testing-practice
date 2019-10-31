const calculator = require('./calculator');

describe('calculator', () => {
  describe('add', () => {
    test('two numbers', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });
    test('a number returns itself', () => {
      expect(calculator.add(1)).toBe(1);
    });
    test('three numbers calculates only first two numbers', () => {
      expect(calculator.add(1, 2, 5)).toBe(3);
    });
    test('throw error with no numbers and array', () => {
      expect(() => calculator.add([], [])).toThrow(TypeError);
    });
    test('throw error with no numbers and string', () => {
      expect(() => calculator.add('a', 'b')).toThrow(TypeError);
    });
  });

  describe('subtract', () => {
    test('second number from first number', () => {
      expect(calculator.subtract(2, 1)).toBe(1);
    });
    test('a number returns itself', () => {
      expect(calculator.subtract(2)).toBe(2);
    });
    test('three numbers calculates only first two numbers', () => {
      expect(calculator.subtract(2, 1, 5)).toBe(1);
    });
    test('throw error for no numbers', () => {
      expect(() => calculator.subtract('a', 'b')).toThrow(TypeError);
    });
  });

  describe('multiply', () => {
    test('two numbers', () => {
      expect(calculator.multiply(2, 4)).toBe(8);
    });
    test('a number returns itself', () => {
      expect(calculator.multiply(2)).toBe(2);
    });
    test('three numbers calculates only first two numbers', () => {
      expect(calculator.multiply(2, 4, 6)).toBe(8);
    });
    test('throw error for no numbers', () => {
      expect(() => calculator.multiply('a', 'b')).toThrow(TypeError);
    });
  });

  describe('divide', () => {
    test('by second number for first number', () => {
      expect(calculator.divide(10, 5)).toBe(2);
    });
    test('returns rounded at 2 decimal point', () => {
      expect(calculator.divide(10, 3)).toBe(3.33);
    });
    test('a number returns itself', () => {
      expect(calculator.divide(10)).toBe(10);
    });
    test('three numbers calculates only first two numbers', () => {
      expect(calculator.divide(10, 5, 3)).toBe(2);
    });
    test('throw error for zero division', () => {
      expect(() => calculator.divide(10, 0)).toThrow(Error);
    });
    test('throw error for no numbers', () => {
      expect(() => calculator.divide('a', 'b')).toThrow(TypeError);
    });
  });
});
