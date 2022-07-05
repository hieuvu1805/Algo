# Mini-Max Sum - HackerRank

https://www.hackerrank.com/challenges/mini-max-sum/problem

## Solution

```js
function miniMaxSum(arr) {
  const total = arr.reduce((a, b) => a + b);
  console.log(total - Math.max(...arr), total - Math.min(...arr));
}
```
