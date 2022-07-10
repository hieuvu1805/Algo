const test = require("../lib/test");
import mergeSortFunc from "./MergeSort";

const testCases = [
  {
    input: [[1]],
    expected: [1],
  },
  {
    input: [[2, 1]],
    expected: [1, 2],
  },
  {
    input: [[1, 1]],
    expected: [1, 1],
  },
  {
    input: [[1, 3, 2]],
    expected: [1, 2, 3],
  },
  {
    input: [[8, 14, 2, 7, 15, 2, 9, 14, 12, 5]],
    expected: [2, 2, 5, 7, 8, 9, 12, 14, 14, 15],
  },
];

function mergeSort(arr: number[]) {
  const copyArr = [...arr];
  mergeSortFunc(copyArr);
  return copyArr;
}

test(testCases, mergeSort);
