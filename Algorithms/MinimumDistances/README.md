# Minimum Distances - HackerRank

https://www.hackerrank.com/challenges/minimum-distances/problem

## Solution

```js
/**
 * TC: best O(1) - worst O(n^2)
 * @param {Array<interger>} a
 * @return {int} the minimum distance found or -1 if there are no matching elements
 */
function minimumDistances(a) {
  let minimum = -1;
  for (let i = 0; i < a.length - 1; i++) {
    const indexMatch = a.indexOf(a[i], i + 1);
    if (indexMatch !== -1) {
      const distance = indexMatch - i;
      if (distance === 1) return 1;
      if ((distance < minimum) | (minimum === -1)) {
        minimum = distance;
      }
    }
  }

  return minimum;
}
```
