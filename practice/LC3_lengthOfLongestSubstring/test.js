const funcLC = require('./index');

test('lengthOfLongestSubstring(\'abcabcbb\') returns 3', () => {
  expect(funcLC('abcabcbb')).toEqual(3);
});

test('lengthOfLongestSubstring(\'bbbbb\') returns 1', () => {
  expect(funcLC('bbbbb')).toEqual(1);
});

test('lengthOfLongestSubstring(\'pwwkew\') returns 3', () => {
  expect(funcLC('pwwkew')).toEqual(3);
});

test('lengthOfLongestSubstring(\'aaaaa\') return 1', () => {
  expect(funcLC('aaaaa')).toEqual(1);
});