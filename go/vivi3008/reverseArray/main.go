package main

import "fmt"

func main() {
	numbers := []int{4, 5, 9, 3, 1, 2}
	fmt.Println(reverseArray(numbers))
}

func reverseArray(numbers []int) []int {
	var reverse []int

	for i := len(numbers) - 1; i >= 0; i-- {
		reverse = append(reverse, numbers[i])
	}

	return reverse
}
