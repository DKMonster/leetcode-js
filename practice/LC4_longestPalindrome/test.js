const funcLC = require('./index2');

test('lengthOfLongestSubstring(\'babad\') returns bab', () => {
  expect(funcLC('babad')).toEqual('bab');
});

test('lengthOfLongestSubstring(\'cbbd\') returns bb', () => {
  expect(funcLC('cbbd')).toEqual('bb');
});

test('lengthOfLongestSubstring(\'a\') returns a', () => {
  expect(funcLC('a')).toEqual('a');
});

test('lengthOfLongestSubstring(\'ac\') return a', () => {
  expect(funcLC('ac')).toEqual('a');
});

test('lengthOfLongestSubstring(\'aacabdkacaa\') return aca', () => {
  expect(funcLC('aacabdkacaa')).toEqual('aca');
});