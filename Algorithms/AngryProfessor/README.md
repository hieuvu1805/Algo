# Angry Professor - HackerRank

https://www.hackerrank.com/challenges/angry-professor/problem

## Solution

```js
/**
 * TC: best O(1) - worst O(n)
 * SC: O(1)
 *
 * @param {int} k :the threshold number of studentsz
 * @param {Array<int>} a :the arrival times of the n students
 * @returns It must return "YES" if class is cancelled, or "NO" otherwise.
 */
function angryProfessor(k, a) {
  let arrivedOn = a.length;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) arrivedOn--;
    if (k > arrivedOn) return "YES";
  }
  return "NO";
}
```
