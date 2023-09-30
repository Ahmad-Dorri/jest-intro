import { test, expect } from 'vitest';
import { reverseString } from './reverseString';

test('reverse any string', () => {
  expect(reverseString('ahmad')).toBe('damha');
});
