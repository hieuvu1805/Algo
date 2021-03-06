# Sorting Algorithms

## Table of Contents

1. [Selection Sort](#selection-sort)
1. [Bubble Sort](#bubble-sort)
1. [Insertion Sort](#insertion-sort)
1. [Merge Sort](#merge-sort)

---

## Selection Sort

The `Selection sort` sorts an array by repeatedly finding the minimum element from unsorted part and putting it at the beginning

### Solutions: [Selection Sort](SelectionSort.ts)

### Stable: `No`

### Time Complexity:

- Best: `O(n^2)`
- Average: `O(n^2)`
- Worst: `O(n^2)`

### Space Complexity: `O(1)`

---

## Bubble Sort

`Bubble Sort` is works by repeatedly swapping the adjacent elements if they are in the wrong order. Move the largest number to the end of array
...

### Solutions: [Bubble Sort](BubbleSort.ts)

### Stable: `Yes`

### Time Complexity:

- Best: `O(n)`
- Average: `O(n^2)`
- Worst: `O(n^2)`

### Space Complexity: `O(1)`

---

## Insertion Sort

`Insertion sort` works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
...

### Solutions: [Insertion Sort](InsertionSort.ts)

### Stable: `Yes`

### Time Complexity:

- Best: `O(n)`
- Average: `O(n^2)`
- Worst: `O(n^2)`

### Space Complexity: `O(1)`

---

## Merge Sort

The `Merge Sort` algorithm is a sorting algorithm that is considered as an example of the divide and conquer strategy.

### Solutions: [Merge Sort](MergeSort.ts)

### Stability: `Yes`

### Time Complexity:

- Best: `O(nlogn)`
- Average: `O(nlogn)`
- Worst: `O(nlogn)`

### Space Complexity: `O(n)`
