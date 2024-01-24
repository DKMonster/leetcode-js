/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example 1: 
 * 
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * 
 * Example 2:
 * 
 * Input: s = "cbbd"
 * Output: "bb"
 * 
 * 
 * Example 3:
 * 
 * Input: s = "a"
 * Output: "a"
 * 
 * 
 * Example 3:
 * 
 * Input: s = "ac"
 * Output: "a"
 * 
 */

/**
 * @param {string} s
 * @return {string}
 */

function longestPalindrome(s) {
  const maxLength = s.length;
  let index = 0;
  let ans = '';
  for (let i = 0; i < maxLength; i++) {
    for (let j = i; j < maxLength; j++) {
      // 用來判斷是否還有後續的重複字
      const text = s.substring(i, j + 1);
      if (text == reverseString(text)) {
        if (text.length > index) {
          ans = text;
          index = ans.length;
        }
      }
    }
  }
  return ans;
}

function reverseString(s) {
  const strArray = s.split("");
  const strReverse = strArray.reverse();
  return strReverse.join("");
}

module.exports = longestPalindrome;