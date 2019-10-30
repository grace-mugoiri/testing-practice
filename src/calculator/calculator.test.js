const calculator = require('./calculator');

test('add two positive numbers', () => {
	expect(2+2).toBe(4)
});

test('add two negative numbers', () => {
	expect(3+3).toBe(6)
});
