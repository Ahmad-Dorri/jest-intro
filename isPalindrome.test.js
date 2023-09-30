import { expect, test } from 'vitest';
import { isPalindrome } from './isPalindrome';

test('returns true for mamam', () => {
  expect(isPalindrome('mamam')).toBe(true);
});

test('return false for ahmad', () => {
  expect(isPalindrome('ahmad')).toBe(false);
});
