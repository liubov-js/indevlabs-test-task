function findMissingNumber(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Please pass the array');
  }

  const sortedArr = arr.sort((a, b) => a - b);
  const numberNextToMissing = sortedArr.find((num, i) => num - i !== sortedArr[0]);

  if (!numberNextToMissing) {
    throw new Error('Missing number does not exist');
  }

  return numberNextToMissing - 1;
}

module.exports = findMissingNumber;
