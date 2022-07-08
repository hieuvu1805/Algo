# Larry's Array - HackerRank

https://www.hackerrank.com/challenges/larrys-array/problem

Author: nikasvanidze

Difficulty: Medium

## Problem

Larry has been given a permutation of a sequence of natural numbers incrementing from `1` as an array. He must determine whether the array can be sorted using the following operation any number of times:

Choose any `3` consecutive indices and rotate their elements in such a way that
`ABC` => `BCA` => `CAB` => `ABC`

## Example

```
// Array       rotate
[1,6,5,2,4,3]	[6,5,2]
[1,5,2,6,4,3]	[5,2,6]
[1,2,6,5,4,3]	[5,4,3]
[1,2,6,3,5,4]	[6,3,5]
[1,2,3,5,6,4]	[5,6,4]
[1,2,3,4,5,6]

YES
```

## Solutions

1. Follow idea of 8-Puzzle Game

```js
// TC: O(n^2)
// SC: O(1)
function larrysArray(A) {
  let inversion = 0;
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) {
        inversion++;
      }
    }
  }
  return inversion % 2 === 0 ? "YES" : "NO";
}
```

2. Do rotate to sort array

```js
// TC: best case O(n), worst case O(n^2)
// SC: O(1)
function larrysArray(A) {
  let isRotated = false;
  for (let i = 0; i < A.length; i++) {
    isRotated = false;
    for (let j = 0; j < A.length - i - 2; j++) {
      if (A[j + 2] < A[j] || A[j + 2] < A[j + 1]) {
        isRotated = true;
        A.rotate(j, A[j + 1] < A[j]);
      }
    }
    if (!isRotated) break;
  }
  return isArraySorted(A) ? "YES" : "NO";
}

Array.prototype.rotate = function (x, firstBigger = true) {
  const temp = this[x];
  if (firstBigger) {
    this[x] = this[x + 1];
    this[x + 1] = this[x + 2];
    this[x + 2] = temp;
  } else {
    this[x] = this[x + 2];
    this[x + 2] = this[x + 1];
    this[x + 1] = temp;
  }
  return this;
};

function isArraySorted(A) {
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] > A[i]) {
      return false;
    }
  }
  return true;
}
```
