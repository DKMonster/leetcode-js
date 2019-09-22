const funcLC = require('./index');

test('twoSum(\'abcabcbb\') returns 3', () => {
  expect(funcLC('abcabcbb')).toEqual(3);
});

test('twoSum(\'bbbbb\') returns 1', () => {
  expect(funcLC('bbbbb')).toEqual(1);
});

test('twoSum(\'pwwkew\') returns 3', () => {
  expect(funcLC('pwwkew')).toEqual(3);
});

test('twoSum(\'aaaaa\') return 1', () => {
  expect(funcLC('aaaaa')).toEqual(1);
});