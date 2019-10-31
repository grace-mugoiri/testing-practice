const {
  capitalize, reverseString,
} = require('./string');

describe('capitalize string', () => {
  test('error for empty string', () => {
    expect(() => capitalize('')).toThrow(TypeError);
  });

  test('for sting with one character', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('for sentence', () => {
    expect(capitalize('this test for a sentence.')).toBe(
      'This test for a sentence.'
    );
  });

  test('error for number', () => {
    expect(() => capitalize(123)).toThrow(TypeError);
  });
});

describe('reverse string', () => {
  test('error for empty string', () => {
    expect(() => reverseString('')).toThrow(TypeError);
  });

  test('for a single string', () => {
    expect(reverseString('A')).toBe('A');
  });

  test('for a sentence', () => {
    expect(reverseString('Hello Hey')).toBe('yeH olleH');
  });

  test('error for number', () => {
    expect(() => reverseString(123)).toThrow(TypeError);
  });
});
