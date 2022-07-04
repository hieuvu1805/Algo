const test = require("../../lib/test");

/**
 * TC: O(n) => calculate total bill
 * SC: O(1)
 *
 * @param {Array} bill : an array of integers representing the cost of each item ordered
 * @param {int} k : an integer representing the zero-based index of the item Anna doesn't eat
 * @param {int} b : the amount of money that Anna contributed to the bill
 * @returns
 */
function bonAppetit(bill, k, b) {
  const totalBill = bill.reduce((a, b) => a + b, 0);
  const overcharged = b - totalBill / 2 + bill[k] / 2;
  return overcharged === 0 ? "Bon Appetit" : overcharged;
}

const testCases = [
  {
    input: [[2, 4, 6], 2, 3],
    expected: "Bon Appetit",
  },
  {
    input: [[2, 4, 6], 2, 6],
    expected: 3,
  },
];

test(testCases, bonAppetit);
