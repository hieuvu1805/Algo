import { swap } from "../lib/arrayHelpers";

/**
 * TC: O(n) | O(n^2)
 * SC: O(1)
 * Stable
 * @param arr
 */
export default function bubbleSort(arr: number[]): void {
  let swapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        swapped = true;
        swap(arr, j - 1, j);
      }
    }
    if (!swapped) break;
  }
}
