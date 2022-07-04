# Day of the Programmer - HackerRank

https://www.hackerrank.com/challenges/day-of-the-programmer/problem

## Solution

```js
function dayOfProgrammer(year) {
  // 243 is 1st September (normal year)
  let day = 256 - 243;
  if (isLeapYear(year)) day--;
  if (year === 1918) day += 13;

  return `${day}.09.${year}`;
}

function isLeapYear(year) {
  if (year < 1918) {
    return year % 4 === 0;
  }
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
```
