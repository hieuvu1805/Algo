const test = require("../lib/test");

function quartiles(arr: number[]): number[] {
  arr.sort((a, b) => a - b);
  const middle = Math.floor(arr.length / 2);

  return [getMedian(arr.slice(0, middle)), getMedian(arr), getMedian(arr.slice(middle + (arr.length % 2)))];
}

function getMedian(arr: number[]): number {
  const middle = Math.floor(arr.length / 2);
  if (arr.length % 2) {
    return arr[middle];
  }

  return Math.floor((arr[middle - 1] + arr[middle]) / 2);
}

const testCases = [
  {
    input: [[9, 5, 7, 1, 3]],
    expected: [2, 5, 8],
  },
  {
    input: [[1, 3, 5, 7]],
    expected: [2, 4, 6],
  },
  {
    input: [[3, 7, 8, 5, 12, 14, 21, 13, 18]],
    expected: [6, 12, 16],
  },
  {
    input: [[3, 7, 8, 5, 14, 21, 13, 18]],
    expected: [6, 10, 16],
  },
];
test(testCases, quartiles);
