const funcLC = require('./index');

test('removeElement([3,2,2,3], 3) returns 2', () => {
    expect(funcLC([3,2,2,3], 3)).toEqual(2);
});

test('removeElement([0,1,2,2,3,0,4,2], 2) returns 5', () => {
    expect(funcLC([0,1,2,2,3,0,4,2], 2)).toEqual(5);
});