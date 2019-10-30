const capitalize = require('./string');

test('str', () => {
	expect(capitalize('')).toBe('')
});

test('str', () => {
	expect(capitalize('a')).toBe('A')
});

test('str', () => {
	expect(capitalize('this test for a sentence')).toBe('This test for a sentence')
});

test('str', () => {
	expect(capitalize(123)).toThrow(TypeError('Invalid input'))
});
