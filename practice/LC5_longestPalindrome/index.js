/**
 * Given a string s, find the longest palindromic substring in s.You may assume that the maximum length of s is 1000.
 * 
 * Example 1: 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * Input: "cbbd"
 * Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */

function longestPalindrome(s) {
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

module.exports = longestPalindrome;