const test = require("../../lib/test");

/**
 * idea is (A + B) % K = A%K + B%K
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {int} k : the divisor
 * @param {Array<int>} s : an array of integers
 * @returns {int} the length of the longest subset of S meeting the criteria
 */
function nonDivisibleSubset(k, s) {
  // remainders array
  const r = Array(k).fill(0);
  for (let i = 0; i < s.length; i++) {
    r[s[i] % k]++;
  }

  let maxLength = 0;
  if (r[0] > 0) maxLength++; // can have maximum 1 number in subset divisible by k
  if (k % 2 === 0 && r[k / 2] > 0) maxLength++; // (2 * x) % k => max 1 in subset

  // a + b = k => can not have both a & b => get base on higher frequency
  for (let i = 1; i < Math.ceil(k / 2); i++) {
    maxLength += Math.max(r[i], r[k - i]);
  }
  return maxLength;
}

const testCases = [
  {
    input: [3, [1, 7, 6, 4]],
    expected: 4,
  },
  {
    input: [3, [1, 2, 4, 7]],
    expected: 3,
  },
  {
    input: [
      5,
      [770528134, 663501748, 384261537, 800309024, 103668401, 538539662, 385488901, 101262949, 557792122, 46058493],
    ],
    expected: 6,
  },
  {
    input: [7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]],
    expected: 11,
  },
  {
    input: [4, [19, 10, 12, 10, 24, 25, 22, 1]],
    expected: 4,
  },
];
test(testCases, nonDivisibleSubset);
