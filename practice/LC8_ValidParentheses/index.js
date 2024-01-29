/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Example 1:
 * 
 * Input: s = "()"
 * Output: true
 * 
 * Example 2:
 * 
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Example 3:
 * 
 * Input: s = "(]"
 * Output: false
 * 
 * Example 4:
 * 
 * Input: s = "([)]"
 * Output: false
 * 
 * Constraints:
 * 
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 * 
 */

var isValid = function(s) {
    let stack = [];  // create the empty stack to store the opening brackets
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (!stack.length || // if the stack was empty
                (char === ')' && stack[stack.length - 1] !== '(') || // check the closing bracket
                (char === '}' && stack[stack.length - 1] !== '{') ||
                (char === ']' && stack[stack.length - 1] !== '[')
            ) {
                return false;
            }
            stack.pop(); // pop the last char in the stack
        }
    }

    return !stack.length; // if the stack was empty, that's mean all brackets had match
}

module.exports = isValid;