const funcLC = require('./index');
const funcLC2 = require('./index2');

test('isPalindrome(121) returns true', () => {
    expect(funcLC(121)).toEqual(true);
});

test('isPalindrome(-121) returns true', () => {
    expect(funcLC(-121)).toEqual(false);
});

test('isPalindrome(10) returns true', () => {
    expect(funcLC(10)).toEqual(false);
});

test('isPalindrome(121) returns true', () => {
    expect(funcLC2(121)).toEqual(true);
});

test('isPalindrome(-121) returns true', () => {
    expect(funcLC2(-121)).toEqual(false);
});

test('isPalindrome(10) returns true', () => {
    expect(funcLC2(10)).toEqual(false);
});