const test = require("../../lib/test");

/**
 * TC: O(1)
 * SC: O(1)
 *
 * @param {int} n : the number of pages in the book
 * @param {int} p : the page number to turn to
 */
function pageCount(n, p) {
  const rangeLeft = p - 1;
  const rangeRight = n - p;
  if (rangeLeft < rangeRight) {
    return Math.ceil(rangeLeft / 2);
  }

  const temp = rangeRight / 2;
  return n % 2 ? Math.floor(temp) : Math.ceil(rangeLeft / 2);
}

const testCases = [
  {
    input: [6, 2],
    expected: 1,
  },
  {
    input: [5, 4],
    expected: 0,
  },
  {
    input: [11, 6],
    expected: 2,
  },
  {
    input: [12, 6],
    expected: 3,
  },
  {
    input: [12, 7],
    expected: 3,
  },
  {
    input: [11, 5],
    expected: 2,
  },
];
test(testCases, pageCount);
