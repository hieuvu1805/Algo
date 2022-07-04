# The Bomberman Game - HackerRank

https://www.hackerrank.com/challenges/bomber-man/problem

## Solution

- [Javascript](index.js)

```js
function bomberMan(n, grid) {
  grid = convertToGrid(grid);
  for (let i = 2; i <= getMaxRepeat(n); i++) {
    if (i % 2) {
      grid = detonates(grid);
    } else {
      grid = planBoom(grid);
    }
  }
  return convertToGridStr(grid);
}
```
