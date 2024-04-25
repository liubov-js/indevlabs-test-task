const findMissingNumber = require('./findMissingNumber');

// classic case
test('missing number is 4', () => {
  expect(findMissingNumber([5, 0, 1, 3, 2])).toBe(4);
});

// we have two missing numbers but should find only the first one
test('missing number is 8', () => {
  expect(findMissingNumber([7, 9, 10, 11, 13])).toBe(8);
});

// if array does not have missing number, throw an error
test('missing number does not exist', () => {
  expect(() => findMissingNumber([1, 2, 3])).toThrow();
});

// if array is empty, throw an error
test('array is empty', () => {
  expect(() => findMissingNumber([])).toThrow();
});

// if argument is not an array, throw an error
test('argument is not an array', () => {
  expect(() => findMissingNumber(1)).toThrow();
});
