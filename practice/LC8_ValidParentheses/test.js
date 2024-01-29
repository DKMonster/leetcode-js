const funcLC = require('./index');

test('isValid("()") returns true', () => {
    expect(funcLC("()")).toEqual(true);
});

test('isValid("()[]{}") returns true', () => {
    expect(funcLC("()[]{}")).toEqual(true);
});

test('isValid("(]") returns false', () => {
    expect(funcLC("(]")).toEqual(false);
});

test('isValid("([)]") returns false', () => {
    expect(funcLC("([)]")).toEqual(false);
});