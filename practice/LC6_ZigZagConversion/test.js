const funcLC = require('./index');

test('zigZagConversion(\'PAYPALISHIRING\', 3) returns PAHNAPLSIIGYIR', () => {
  expect(funcLC('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR');
});