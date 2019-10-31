const caesarCipher = require('./caesar_cipher');

describe('caesarCipher', () => {
  test('zero shift for a sentence', () => {
    expect(caesarCipher('good morning.', 0)).toBe('good morning.');
  });

  test('shift for a sentence', () => {
    expect(caesarCipher('Good Morning.', 3)).toBe('Jrrg Pruqlqj.');
  });

  test('shift for all alphabet combination', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyzab.', 3)).toBe(
      'defghijklmnopqrstuvwxyzabcde.'
    );
  });

  test('error for empty string', () => {
    expect(() => caesarCipher('', 3)).toThrow(TypeError);
  });

  test('error for non string sentence', () => {
    expect(() => caesarCipher(333, 3)).toThrow(TypeError);
  });

  test('error for non number shift', () => {
    expect(() => caesarCipher('good morning.', 'good')).toThrow(TypeError);
  });
});
