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

function swap(arr: number[], x: number, y: number): void {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
