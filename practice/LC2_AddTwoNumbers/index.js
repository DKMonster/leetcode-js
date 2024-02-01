/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes 
 * contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example: 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function addTwoNumbers(l1, l2, plus = 0) {
  var num = l1.val + l2.val + plus;
  var ans;
  plus = 0;
  if (num >= 10) {
    ans = new ListNode(num - 10);
    plus = 1;
  } else {
    ans = new ListNode(num);
  }

  // 如果其中一方有值那需要預先給值0，避免錯誤
  if ((l1.next === null && l2.next !== null)) l1.next = new ListNode(0);
  if ((l1.next !== null && l2.next === null)) l2.next = new ListNode(0);

  // 檢查是否有下一個值
  if (l1.next !== null && l2.next !== null) {
    // 遞迴召喚下一次ListNode
    ans.next = addTwoNumbers(l1.next, l2.next, plus);
  } else if (l1.next === null && l2.next === null && plus === 1) {
    // 避免只有一層出現錯誤
    ans.next = addTwoNumbers(new ListNode(0), new ListNode(0), plus);
  }
  return ans;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = addTwoNumbers;