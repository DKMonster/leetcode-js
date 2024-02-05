const funcLC = require('./index2');

test('lengthOfLastWord("Hello World") returns 2', () => {
    expect(funcLC("Hello World")).toEqual(5);
});

test('lengthOfLastWord("   fly me   to   the moon  ") returns 1', () => {
    expect(funcLC("   fly me   to   the moon  ")).toEqual(4);
});

test('lengthOfLastWord("luffy is still joyboy") returns 6', () => {
    expect(funcLC("luffy is still joyboy")).toEqual(6);
});