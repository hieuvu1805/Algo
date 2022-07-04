# Program for Fibonacci numbers

## What is fibonacci

The Fibonacci numbers are the numbers in the following integer sequence.

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ....`

In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation

`Fn = Fn-1 + Fn-2`

with `F0 = 0` and `F1 = 1`

## Solution in

- [Javascript](./index.js)
- [PHP](./index.php)
- [Go](./index.go)
- [C++](./index.cpp)

```js
// Javascript
// Time Complexity: O(n)
// Space Complexity: O(1)
function fibLoop(n) {
  if (n < 2) {
    return n;
  }

  let temp,
    prev = 0,
    cur = 1;

  for (let i = 2; i <= n; i++) {
    temp = prev + cur;
    prev = cur;
    cur = temp;
  }
  return cur;
}
```

```php
<?php
function fibLoop(int $n): int {
  if ($n < 2) {
    return $n;
  }
  $temp = 1; $prev = 0; $cur = 1;

  for ($i = 2; $i <= $n; $i++) {
    $temp = $prev + $cur;
    $prev = $cur;
    $cur = $temp;
  }
  return $cur;
}
```

```go
// Golang
func fibonacci(n int) int {
	if n < 2 {
		return n
	}

  a, b := 0, 1
	for i := 2; i <= n; i++ {
    a, b = b, a+b
	}
	return b
}
```
