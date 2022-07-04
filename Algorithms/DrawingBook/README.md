# Drawing Book - HackerRank

https://www.hackerrank.com/challenges/drawing-book/problem

## Solution

```js
function pageCount(n, p) {
  const rangeLeft = p - 1;
  const rangeRight = n - p;
  if (rangeLeft < rangeRight) {
    return Math.ceil(rangeLeft / 2);
  }

  const temp = rangeRight / 2;
  return n % 2 ? Math.floor(temp) : Math.ceil(rangeLeft / 2);
}
```
