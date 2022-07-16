const test = require("../../lib/test");

function getMoneySpent(keyboards: number[], drives: number[], b: number): number {
  const totals: number[] = [];

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const total: number = keyboards[i] + drives[j];
      if (total === b) {
        return b;
      } else if (total < b) {
        totals.push(total);
      }
    }
  }
  if (totals.length) {
    return Math.max(...totals);
  }
  return -1;
}

const testCases = [
  {
    input: [[40, 50, 60], [5, 8, 12], 60],
    expected: 58,
  },
  {
    input: [[3, 1], [5, 2, 8], 10],
    expected: 9,
  },
  {
    input: [[50, 60], [5, 2, 8], 10],
    expected: -1,
  },
];
test(testCases, getMoneySpent);
