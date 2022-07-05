# Non-Divisible Subset - HackerRank

https://www.hackerrank.com/challenges/non-divisible-subset/problem

## Solution

```js
function nonDivisibleSubset(k, s) {
  // remainders array
  const r = Array(k).fill(0);
  for (let i = 0; i < s.length; i++) {
    r[s[i] % k]++;
  }

  let maxLength = 0;
  if (r[0] > 0) maxLength++; // can have maximum 1 number in subset divisible by k
  if (k % 2 === 0 && r[k / 2] > 0) maxLength++; // (2 * x) % k => max 1 in subset

  // a + b = k => can not have both a & b => get base on higher frequency
  for (let i = 1; i < Math.ceil(k / 2); i++) {
    maxLength += Math.max(r[i], r[k - i]);
  }
  return maxLength;
}
```
