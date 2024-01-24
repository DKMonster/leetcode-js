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
  // 如果剛開始就正確就回傳
  if (isPalindrome(s)) return s;
  // 從尾端開始
  for (let i = s.length; i > 0; i--) {
    for (let j = 0; j + i <= s.length; j++) {
      const ans = s.substring(j, j + i);
      // 用來判斷是否還有後續的重複字
      if (isPalindrome(ans)) return ans;
    }
  }
}

// 直接由最強長度來進行計算
function isPalindrome(str) {
  // 設定起始跟結束
  let start = 0, end = str.length - 1;
  // 確認當前指標是否正確並且 start 還在 end的前面
  while(start <= end && str.charAt(start) == str.charAt(end)) {
    // 往前推進
    start++;
    // 往後推進
    end--;
  }
  // 最後指標是否有結算完
  return start >= end;
}

module.exports = longestPalindrome;