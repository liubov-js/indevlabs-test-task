function findMissingNumber(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Please pass the array');
  }

  let missingNumber;
  const minNumber = Math.min(...arr);
  const maxNumber = Math.max(...arr);

  for (let i = minNumber; i <= maxNumber; i++) {
    if (!arr.includes(i)) {
      missingNumber = i;
      break;
    }
  }

  return missingNumber;
}

module.exports = findMissingNumber;
