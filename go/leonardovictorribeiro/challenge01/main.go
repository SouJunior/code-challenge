package main

import "fmt"

func main() {
	fmt.Println(addition(3, 2))
	fmt.Println(addition(-3, -6))
	fmt.Println(addition(7, 3))
}

func addition(a, b int) int {
	return a + b
}
