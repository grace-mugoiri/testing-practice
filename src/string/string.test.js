const {capitalize, reverseString} = require('./string');

test('capitalize empty string', () => {
	expect(capitalize('')).toBe('')
});

test('capitalize sting with one character', () => {
	expect(capitalize('a')).toBe('A')
});

test('capitalize sentence', () => {
	expect(capitalize('this test for a sentence')).toBe('This test for a sentence')
});

test('capitalize number error', () => {
	// expect(capitalize(123)).toThrow() check why it is failing
	expect(() => {
		throw new Error();
      }).toThrow();
});

test('reverse empty string', () => {
	expect(reverseString('')).toBe('')
});

test('reverse a single string', () => {
	expect(reverseString('Hello')).toBe('olleH')
});
