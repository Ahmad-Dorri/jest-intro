import { reverseString } from './reverseString';

export function isPalindrome(word) {
  return word.toLowerCase() === reverseString(word).toLowerCase();
}
