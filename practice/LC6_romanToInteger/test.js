const funcLC = require('./index');

test('romanToInt("III") returns 3', () => {
    expect(funcLC("III")).toEqual(3);
});

test('romanToInt("LVIII") returns 58', () => {
    expect(funcLC("LVIII")).toEqual(58);
});

test('romanToInt("MCMXCIV") returns 1994', () => {
    expect(funcLC("MCMXCIV")).toEqual(1994);
});