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
