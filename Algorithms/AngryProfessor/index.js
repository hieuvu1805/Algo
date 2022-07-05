const test = require("../../lib/test");

/**
 * TC: best O(1) - worst O(n)
 * SC: O(1)
 *
 * @param {int} k :the threshold number of studentsz
 * @param {Array<int>} a :the arrival times of the n students
 * @returns It must return "YES" if class is cancelled, or "NO" otherwise.
 */
function angryProfessor(k, a) {
  return isCancelled(k, a) ? "YES" : "NO";
}

function isCancelled(k, a) {
  let arrivedOn = a.length;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) arrivedOn--;
    if (k > arrivedOn) return true;
  }
  return false;
}

test(
  [
    {
      input: [3, [-2, -1, 0, 1, 2]],
      expected: "NO",
    },
    {
      input: [4, [-1, -3, 4, 2, -1]],
      expected: "YES",
    },
    {
      input: [2, [-1, 0, 1, 2, 3]],
      expected: "NO",
    },
    {
      input: [2, [0, -1, 2, 1]],
      expected: "NO",
    },
    {
      input: [5, [1, 0, -1, -2, 0]],
      expected: "YES",
    },
  ],
  angryProfessor
);
