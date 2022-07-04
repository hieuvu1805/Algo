const test = require("../../lib/test");

Array.prototype.swap = function (x, y) {
  const temp = this[y];
  this[y] = this[x];
  this[x] = temp;
  return this;
};

/**
 * TC: best case O(n), worst case O(n^2)
 * SC: O(1)
 *
 * @param {Array} q
 * @returns int
 */
function minimumBribes(q) {
  // check chaotic before sort
  for (let i = 0; i < q.length - 2; i++) {
    if (q[i] > i + 3) {
      return "Too chaotic";
    }
  }

  let isSwapped = false,
    bribe = 0;

  // buble sort
  for (let i = 0; i < q.length; i++) {
    isSwapped = false;
    for (let j = 0; j < q.length - i - 1; j++) {
      if (q[j] > q[j + 1]) {
        q.swap(j, j + 1);
        isSwapped = true;
        bribe++;
      }
    }

    if (!isSwapped) {
      break;
    }
  }
  return bribe;
}

const testCases = [
  {
    input: [1, 2, 3, 5, 4, 6, 7, 8],
    expected: 1,
  },
  {
    input: [4, 1, 2, 3],
    expected: "Too chaotic",
  },
  {
    input: [2, 1, 5, 3, 4],
    expected: 3,
  },
  {
    input: [2, 5, 1, 3, 4],
    expected: "Too chaotic",
  },
  {
    input: [1, 2, 5, 3, 7, 8, 6, 4],
    expected: 7,
  },
];
test(testCases, minimumBribes);
