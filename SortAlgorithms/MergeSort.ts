export default function mergeSort(arr: number[]) {
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

// 4a 5 3 2 4b 1 => start
//     4a 5 3  | 2 4b 1
//   4a | 5 3  | 2 | 4b 1
// 4a  | 5 | 3 | 2 | 4b | 1
// 4a  | 3 5   | 2 | 1 4b
//  3 4a 5     | 1 2 4b
//       1 2 3 4a 4b 5

// 4a 2a 3a 4b 2b 3b => start
//     4a 2a 3a | 4b 2b 3b
//   4a | 2a 3a | 4b | 2b 3b
// 4a | 2a | 3a | 4b | 2b | 3b
// 4a | 2a 3a   | 4b | 2b 3b
//   2a 3a 4a   | 2b 3b 4b
//     2a 2b 3a 3b 4a 4b
