const test = require("../../lib/test");

/**
 * TC: best O(1) - worst O(n^2)
 * @param {Array<interger>} a
 * @return {int} the minimum distance found or -1 if there are no matching elements
 */
function minimumDistances(a) {
  let minimum = -1;
  for (let i = 0; i < a.length - 1; i++) {
    const indexMatch = a.indexOf(a[i], i + 1);
    if (indexMatch !== -1) {
      const distance = indexMatch - i;
      if (distance === 1) return 1;
      if ((distance < minimum) | (minimum === -1)) {
        minimum = distance;
      }
    }
  }

  return minimum;
}

test(
  [
    {
      input: [[7, 1, 3, 4, 1, 7]],
      expected: 3,
    },
    {
      input: [[1, 2, 3, 4]],
      expected: -1,
    },
    {
      input: [[1]],
      expected: -1,
    },
    {
      input: [[1, 1]],
      expected: 1,
    },
    {
      input: [[20, 760, 143, 571, 571, 583, 951, 883, 227, 694, 979, 40]],
      expected: 1,
    },
    {
      input: [[20, 20, 760, 143, 571, 571, 583, 951, 883, 227, 951, 694, 979, 40]],
      expected: 1,
    },
  ],
  minimumDistances
);
