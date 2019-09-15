const funcLC = require('./index');

test('addTwoNumbers([2, 4, 3], [5, 6, 4]) returns [7,0,8]', () => {
  expect(
    funcLC(
      new ListNode(2, new ListNode(4, new ListNode(3))),
      new ListNode(5, new ListNode(6, new ListNode(4))))
  ).toEqual(new ListNode(7, new ListNode(0, new ListNode(8))));
});

test('addTwoNumbers([9, 8, 2], [2, 2, 5]) returns [1,1,8]', () => {
  expect(
    funcLC(
      new ListNode(9, new ListNode(8, new ListNode(2))),
      new ListNode(2, new ListNode(2, new ListNode(5))))
  ).toEqual(new ListNode(1, new ListNode(1, new ListNode(8))));
});

function ListNode(val, next = null) {
  this.val = val;
  if (next !== null) {
    this.next = next;
  } else {
    this.next = null;
  }
  return this;
}