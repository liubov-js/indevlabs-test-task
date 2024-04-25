function findMissingNumber(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Please pass the array');
  }

  const sortedArr = arr.sort((a, b) => a - b);
  let prevNum = sortedArr[0];

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== prevNum) {
      return prevNum;
    } else {
      prevNum++;
    }
  }
}

module.exports = findMissingNumber;
