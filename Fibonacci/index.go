package main

import "fmt"

func fibonacci(n int) uint64 {
	if (n < 2) {
		return uint64(n)
	}
	
	var a uint64 = 0
	var b uint64 = 1

	for i := 2; i <= n; i++ {
		a, b = b, a+b
	}
	return b
}

func main() {
	fmt.Println("Go")
	var n int = -1
	for valid := true; valid; valid = (n < 0 || n > 93) {
		fmt.Print("Enter n (n >= 0 && n <= 93): ")
		fmt.Scan(&n)
	}
	
	fmt.Print("fn(", n, ") = ", fibonacci(n), "\n")
}
