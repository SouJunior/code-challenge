package main

import (
	"fmt"
)


func main() {
	var height float64
	var width float64
	var area float64
	fmt.Println("Enter the height of the rectangle")
	fmt.Scan(&height)
	fmt.Println("Enter the width of the rectangle")
	fmt.Scan(&width)

	switch {
	case height <= 0 || width <= 0:
		fmt.Println(area -1)
	
	default:
		area = height * width
		fmt.Println("The area of the rectangle is", area)
	}
}

