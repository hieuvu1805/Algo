/**
 * TC: O(nlogn)
 * SC: O(n)
 */
function mergeSort(arr: number[]) {
  if (arr.length > 1) {
    const m: number = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, m);
    const rightArr = arr.slice(m);
    mergeSort(leftArr);
    mergeSort(rightArr);
    merge(arr, leftArr, rightArr);
  }
}

function merge(arr: number[], left: number[], right: number[]): void {
  let i = 0,
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      arr[i] = left[leftIndex];
      leftIndex++;
    } else {
      arr[i] = right[rightIndex];
      rightIndex++;
    }

    i++;
  }

  while (leftIndex < left.length) {
    arr[i] = left[leftIndex];
    leftIndex++;
    i++;
  }

  while (rightIndex < right.length) {
    arr[i] = right[rightIndex];
    rightIndex++;
    i++;
  }
}

export default mergeSort;
