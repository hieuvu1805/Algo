const test = require("../lib/test");
import selectionSort from "./SelectionSort";
import bubbleSort from "./BubbleSort";
import insertionSort from "./InsertionSort";
import mergeSort from "./MergeSort";

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
    input: [[1, 2, 3]],
    expected: [1, 2, 3],
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

function sort(arr: number[], sortFunc: Function) {
  const copyArr = [...arr];
  sortFunc(copyArr);
  return copyArr;
}

console.log("Sort Algorithms: selectionSort");
test(testCases, (arr: number[]) => sort(arr, selectionSort));
console.log("Sort Algorithms: bubbleSort");
test(testCases, (arr: number[]) => sort(arr, bubbleSort));
console.log("Sort Algorithms: mergeSort");
test(testCases, (arr: number[]) => sort(arr, mergeSort));
console.log("Sort Algorithms: insertionSort");
test(testCases, (arr: number[]) => sort(arr, insertionSort));
