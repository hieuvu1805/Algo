const test = require("../../lib/test");

/**
 * TC: best case O(n), worst case O(n^2)
 * SC: O(1)
 *
 * @param {array} A
 * @returns string YES|NO
 */
function larrysArray(A: number[]): "YES" | "NO" {
  let isRotated: boolean = false;
  for (let i: number = 0; i < A.length; i++) {
    isRotated = false;
    for (let j: number = 0; j < A.length - i - 2; j++) {
      if (A[j + 2] < A[j] || A[j + 2] < A[j + 1]) {
        isRotated = true;
        A.rotate(j, A[j + 1] < A[j]);
      }
    }
    if (!isRotated) break;
  }
  return isArraySorted(A) ? "YES" : "NO";
}

interface Array<T> {
  rotate(x: number, firstBigger: boolean): Array<T>;
}

if (!Array.prototype.rotate) {
  Array.prototype.rotate = function <T>(x: number, firstBigger: boolean = true): T[] {
    const temp = this[x];
    if (firstBigger) {
      this[x] = this[x + 1];
      this[x + 1] = this[x + 2];
      this[x + 2] = temp;
    } else {
      this[x] = this[x + 2];
      this[x + 2] = this[x + 1];
      this[x + 1] = temp;
    }
    return this;
  };
}

function isArraySorted(A: number[]): boolean {
  for (let i: number = 1; i < A.length; i++) {
    if (A[i - 1] > A[i]) {
      return false;
    }
  }
  return true;
}

/**
 * TC: O(n^2)
 * SC: O(1)
 *
 * @param {array} A
 * @returns string YES|NO
 */
function larrysArrayPuzzle(A: number[]): "YES" | "NO" {
  let inversion: number = 0;
  for (let i: number = 0; i < A.length - 1; i++) {
    for (let j: number = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) {
        inversion++;
      }
    }
  }
  return inversion % 2 === 0 ? "YES" : "NO";
}

const testCases = [
  {
    input: [[1, 2, 3, 4, 5]],
    expected: "YES",
  },
  {
    input: [[1, 2, 3, 4, 5, 6]],
    expected: "YES",
  },
  {
    input: [[1, 6, 5, 2, 4, 3]],
    expected: "YES",
  },
  {
    input: [[1, 2, 3, 5, 4]],
    expected: "NO",
  },
  {
    input: [[22, 16, 6, 7, 24, 8, 11, 26, 18, 17, 10, 4, 1, 23, 15, 20, 21, 14, 25, 2, 3, 9, 13, 28, 12, 19, 5, 27]],
    expected: "NO",
  },
  {
    input: [[7, 10, 9, 4, 6, 11, 3, 2, 8, 1, 5]],
    expected: "YES",
  },
  {
    input: [[7, 19, 9, 10, 2, 3, 6, 1, 18, 15, 14, 8, 4, 11, 17, 16, 5, 13, 12]],
    expected: "YES",
  },
  {
    input: [[13, 11, 17, 5, 16, 9, 7, 6, 2, 18, 15, 4, 1, 8, 14, 3, 10, 12]],
    expected: "YES",
  },
  {
    input: [[4, 20, 22, 17, 8, 14, 11, 9, 3, 12, 7, 1, 10, 2, 15, 18, 5, 13, 6, 19, 16, 21, 23, 24]],
    expected: "YES",
  },
  {
    input: [
      [29, 13, 9, 19, 25, 22, 11, 12, 20, 10, 4, 5, 21, 15, 8, 7, 2, 16, 18, 17, 26, 27, 6, 3, 14, 1, 23, 24, 28],
    ],
    expected: "YES",
  },
  {
    input: [[10, 22, 16, 13, 1, 3, 17, 11, 21, 15, 18, 6, 9, 4, 20, 19, 5, 2, 7, 14, 12, 8]],
    expected: "YES",
  },
];
test(testCases, larrysArray);
test(testCases, larrysArrayPuzzle);
