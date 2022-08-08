const test = require("../lib/test");

/**
 * @param {*} input
 */
function StandardDeviation(arr) {
  const sum = arr.reduce((total, c) => total + c, 0);
  const mean = sum / arr.length;

  const sumSquare = arr.reduce((total, c) => total + Math.pow(c - mean, 2), 0);
  const meanSquare = sumSquare / arr.length;

  return Math.sqrt(meanSquare).toFixed(1);
}

const testCases = [
  {
    input: [[2, 5, 2, 7, 4]],
    expected: 1.9,
  },
  {
    input: [[10, 40, 30, 50, 20]],
    expected: 14.1,
  },
];
test(testCases, StandardDeviation);
