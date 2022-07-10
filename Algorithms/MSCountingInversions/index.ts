const test = require("../../lib/test");

/**
 * TC: O(n^2)
 * SC: O(1)
 *
 * @param arr
 * @returns
 */
function countInversionsNormal(arr: number[]): number {
  let inversion: number = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        inversion++;
      }
    }
  }
  return inversion;
}

/**
 * TC: O(nlogn)
 * SC: O(n)
 */
function countInversions(arr: number[]): number {
  return mergeSort(arr);
}

function mergeSort(arr: number[]): number {
  if (arr.length > 1) {
    const m: number = Math.floor(arr.length / 2);
    const leftArr: number[] = arr.slice(0, m);
    const rightArr: number[] = arr.slice(m);
    return mergeSort(leftArr) + mergeSort(rightArr) + merge(arr, leftArr, rightArr);
  }
  return 0;
}

function merge(arr: number[], leftArr: number[], rightArr: number[]): number {
  let k: number = 0,
    i: number = 0,
    j: number = 0,
    inversion: number = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
      inversion += leftArr.length - i;
    }

    k++;
  }

  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }

  return inversion;
}

const testCases = [
  {
    input: [[1, 1, 1, 2, 2]],
    expected: 0,
  },
  {
    input: [[2, 1, 3, 1, 2]],
    expected: 4,
  },
  {
    input: [[1, 5, 3, 7]],
    expected: 1,
  },
  {
    input: [[7, 5, 3, 1]],
    expected: 6,
  },
];

test(testCases, countInversionsNormal);
test(testCases, countInversions);
