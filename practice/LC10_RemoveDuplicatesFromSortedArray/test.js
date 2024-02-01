const funcLC = require('./index');

test('removeDuplicates([1,1,2]) returns 2', () => {
    expect(funcLC([1,1,2])).toEqual(2);
});

test('removeDuplicates([0,0,1,1,1,2,2,3,3,4]) returns 5', () => {
    expect(funcLC([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
});