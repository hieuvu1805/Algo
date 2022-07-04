# Bill Division - HackerRank

https://www.hackerrank.com/challenges/bon-appetit/problem

## Solution

```js
function bonAppetit(bill, k, b) {
  const totalBill = bill.reduce((a, b) => a + b, 0);
  const overcharged = b - totalBill / 2 + bill[k] / 2;
  return overcharged === 0 ? "Bon Appetit" : overcharged;
}
```
