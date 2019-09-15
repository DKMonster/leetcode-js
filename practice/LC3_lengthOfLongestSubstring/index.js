/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes 
 * contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example 1: 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * Example 2:
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * Example 3:
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 *              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
  let maxLength = s.length;
  let ans = 0;
  let stringMap = [];
  for (let i = 0, j = 0; j < maxLength; j++) {
    let charText = s.charAt(j);
    // 如果裡面有存在資料的話進行進位
    if (stringMap[charText]) {
      //  i 就進位
      i = Math.max(stringMap[charText], i);
    }
    // 針對現在的點取最大值
    ans = Math.max(ans, j - i + 1);
    // 丟到物件裡面，確認接下來可排除的重複值
    stringMap[charText] = j + 1;
  }
  return ans;
}

module.exports = lengthOfLongestSubstring;