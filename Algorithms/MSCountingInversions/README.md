# Merge Sort: Counting Inversions - HackerRank

https://www.hackerrank.com/challenges/ctci-merge-sort/problem

## Solution

```js
/**
 * TC: O(nlogn)
 * SC: O(n)
 */
function countInversions(arr: number[]): number {
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
```
