/**
 * Given a string s consisting of words and spaces, 
 * return the length of the last word in the string.
 * 
 * A word is a maximal substring consisting of non-space characters only.
 * 
 * Example 1:
 * 
 * Input: s = "Hello World"
 * Output: 5
 * 
 * Example 2:
 * 
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 * 
 * Example 3:
 * 
 * Input: s = "luffy is still joyboy"
 * Output: 6
 * 
 * Constraints:
 * 
 * 1 <= s.length <= 104
 * s consists of only English letters and spaces ' '.
 * There will be at most one word in s.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let strTrim = s.trim();
    return strTrim.length - strTrim.lastIndexOf(' ') - 1;
};

module.exports = lengthOfLastWord;