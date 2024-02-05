const funcLC = require('./index');

test('searchInsert([1,3,5,6], 5) returns 2', () => {
    expect(funcLC([1,3,5,6], 5)).toEqual(2);
});

test('searchInsert([1,3,5,6], 2) returns 1', () => {
    expect(funcLC([1,3,5,6], 2)).toEqual(1);
});

test('searchInsert([1,3,5,6], 7) returns 4', () => {
    expect(funcLC([1,3,5,6], 7)).toEqual(4);
});