const funcLC = require('./index');

test('strStr("hello", "ll") returns 2', () => {
    expect(funcLC("hello", "ll")).toEqual(2);
});

test('strStr("aaaaa", "bba") returns -1', () => {
    expect(funcLC("aaaaa", "bba")).toEqual(-1);
});

test('strStr("", "") returns 0', () => {
    expect(funcLC("", "")).toEqual(0);
});