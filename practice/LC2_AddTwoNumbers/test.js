const twoSum = require('./index');

test('addTwoNumbers([2, 4, 3], [5, 6, 4]) returns [7,0,8]', () => {
  expect(twoSum([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
});