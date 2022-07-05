# Ice Cream Parlor - HackerRank

https://www.hackerrank.com/challenges/icecream-parlor/problem

Author: dheeraj

Difficulty: Easy

## Problem

Two friends like to pool their money and go to the ice cream parlor. They always choose two distinct flavors and they spend all of their money.

Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.

## Example

`m = 6` and `cost = [1,3,4,5,6]`

The two flavors that cost `1` and `5` meet the criteria. Using `1`-based indexing, they are at indices `1` and `4`.

## Function Description

Complete the icecreamParlor function in the editor below.

icecreamParlor has the following parameter(s):

- int m: the amount of money they have to spend
- int cost[n]: the cost of each flavor of ice cream

## Returns

- int[2]: the indices of the prices of the two flavors they buy, sorted ascending

## Solution

```js
/**
 * TC: best case O(1), worst case O(n^2)
 * SC: O(1)
 *
 * @param {int} m
 * @param {Array} arr
 * @returns
 */
function icecreamParlor(m, arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === m) {
        // return directly because prices arr is sorted
        // so first found is smallest pair of index flavors cost []
        return [i + 1, j + 1];
      }
    }
  }
}
```
