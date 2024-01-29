const funcLC = require('./index');

test('longestCommonPrefix(["flower","flow","flight"]) returns "fl"', () => {
    expect(funcLC(["flower","flow","flight"])).toEqual("fl");
});

test('longestCommonPrefix(["dog","racecar","car"]) returns ""', () => {
    expect(funcLC(["dog","racecar","car"])).toEqual("");
});

test('longestCommonPrefix(["a"]) returns "a"', () => {
    expect(funcLC(["a"])).toEqual("a");
});

test('longestCommonPrefix(["ab", "a"]) returns "a"', () => {
    expect(funcLC(["ab", "a"])).toEqual("a");
});

test('longestCommonPrefix(["cool","dog","car","do"]) returns ""', () => {
    expect(funcLC(["cool","dog","car","do"])).toEqual("");
});