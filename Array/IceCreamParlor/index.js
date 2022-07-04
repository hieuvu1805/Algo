const test = require("../../lib/test");

/**
 * TC: best case O(1), worst case O(n^2)
 * SC: O(1)
 *
 * @param {int} m
 * @param {Array} arr
 * @returns
 */
function icecreamParlor(m, arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === m) {
        return [i + 1, j + 1];
      }
    }
  }
}

test(
  [
    {
      input: [4, [1, 4, 5, 3, 2]],
      expected: [1, 4],
    },
    {
      input: [4, [2, 2, 4, 3]],
      expected: [1, 2],
    },
  ],
  icecreamParlor
);
