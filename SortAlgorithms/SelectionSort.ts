export default function selectionSort(arr: number[]) {
  let minIndex: number;

  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      const temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
}
// 4a 5 3 2 4b 1 => start
// 1 5 3 2 4b 4a
// 1 2 3 5 4b 4a
// 1 2 3 5 4b 4a
// 1 2 3 4b 5 4a
// 1 2 3 4b 4a 5

// 4a 2a 3a 4b 2b 3b => start
// 2a 4a 3a 4b 2b 3b
// 2a 2b 3a 4b 4a 3b
// 2a 2b 3a 3b 4a 4b
