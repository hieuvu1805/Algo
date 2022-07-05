const test = require("../../lib/test");

/**
 * TC: O(n)
 * SC: O(1)
 *
 * @param {int} n : the day number to report
 * @retturns {int} the cumulative likes at that day
 */
function viralAdvertising(n) {
  let liked = Math.floor(5 / 2),
    likeCumulative = liked;
  for (let i = 2; i <= n; i++) {
    likeCumulative += liked = Math.floor((liked * 3) / 2);
  }
  return likeCumulative;
}

test(
  [
    {
      input: [1],
      expected: 2,
    },
    {
      input: [5],
      expected: 24,
    },
    {
      input: [365],
      expected: 6.087834292064431e64,
    },
  ],
  viralAdvertising
);
