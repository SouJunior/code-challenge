package main

import "fmt"

func main() {
	fmt.Println(reverse([]int{1, 2, 3, 4}))
	fmt.Println(reverse([]int{9, 9, 2, 3, 4}))
	fmt.Println(reverse([]int{}))
}

func reverse(arr []int) []int {
	if arr == nil {
		return arr
	}
	for i, j := 0, len(arr)-1; i < j; i, j = i+1, j-1 {
		arr[i], arr[j] = arr[j], arr[i]
	}
	return arr
}
