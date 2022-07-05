const test = require("../../lib/test");

/**
 * TC: O(n)
 * SC: O(1)
 *
 * @param {Array<int>} arr
 */
function miniMaxSum(arr) {
  if (arr.length === 0) {
    return [0, 0];
  }
  const total = arr.reduce((a, b) => a + b, 0);
  return [total - Math.max(...arr), total - Math.min(...arr)];
}

test(
  [
    {
      input: [[1, 2, 3, 4, 5]],
      expected: [10, 14],
    },
    {
      input: [[]],
      expected: [0, 0],
    },
    {
      input: [[123]],
      expected: [0, 0],
    },
  ],
  miniMaxSum
);
