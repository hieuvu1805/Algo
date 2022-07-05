# New Year Chaos - HackerRank

https://www.hackerrank.com/challenges/new-year-chaos/problem

Author: Shafaet

Difficulty: Medium

## Problem

It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from to . Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

Determine the `minimum number of bribes` that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print `Too chaotic`.

## Example

`q = [1, 2, 3, 5, 4, 6, 7, 8]`

If person `5` bribes person `4`, the queue will look like this: `[1, 2, 3, 4, 5, 6, 7, 8]`. Only bribe is required. Print `1`.

## Solution

```js
/**
 * TC: best case O(n), worst case O(n^2)
 * SC: O(1)
 *
 * @param {Array} q
 * @returns int
 */
function minimumBribes(q) {
  // check chaotic before sort
  for (let i = 0; i < q.length - 2; i++) {
    if (q[i] > i + 3) {
      return "Too chaotic";
    }
  }

  let isSwapped = false,
    bribe = 0;

  // buble sort
  for (let i = 0; i < q.length; i++) {
    isSwapped = false;
    for (let j = 0; j < q.length - i - 1; j++) {
      if (q[j] > q[j + 1]) {
        q.swap(j, j + 1);
        isSwapped = true;
        bribe++;
      }
    }

    if (!isSwapped) {
      break;
    }
  }
  return bribe;
}

Array.prototype.swap = function (x, y) {
  const temp = this[y];
  this[y] = this[x];
  this[x] = temp;
  return this;
};
```
