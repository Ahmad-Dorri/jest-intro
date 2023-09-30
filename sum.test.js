const sum = require('./sum');

test('1 + 2 equls to 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('expect 1 as a string and 2 as an string tobe 3 as an number', () => {
  expect(sum('1', '2')).toBe(3);
});
