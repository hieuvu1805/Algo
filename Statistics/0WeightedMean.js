const test = require("../lib/test");

/**
 * @param {*} input
 */
function WeightedMean(X, W) {
  const sumW = W.reduce((a, b) => a + b, 0);
  let sumXW = 0;
  X.forEach((val, i) => {
    sumXW += val * W[i];
  });
  return (sumXW / sumW).toFixed(1);
}

const testCases = [
  {
    input: [
      [10, 40, 30, 50, 20],
      [1, 2, 3, 4, 5],
    ],
    expected: "32.0",
  },
];
test(testCases, WeightedMean);
