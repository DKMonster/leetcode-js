/**
 * Given two strings needle and haystack, 
 * return the index of the first occurrence of needle in haystack, 
 * or -1 if needle is not part of haystack.
 * 
 * Example 1:
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * Example 2:
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * Example 3:
 * 
 * Input: haystack = "", needle = ""
 * Output: 0
 * 
 * Constraints:
 * 
 * 0 <= haystack.length, needle.length <= 5 * 104
 * haystack and needle consist of only lower-case English characters.
 * 
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let len = needle.length;
    let output = -1;
    for(let i = 0; i < haystack.length - len + 1; i++) {
        if (haystack.slice(i, i + len) === needle) {
            output = i;
            break;
        }
    }
    return output;
};

module.exports = strStr;