package main

import (
	"fmt"
)

func main() {
	var array [5]int
	var array2 [5]int
	var i int
	for i = 0; i < 5; i++ {
		
		fmt.Println("Enter the number",i+1,"of 5",":" ) 

		fmt.Scan(&array[i])
	}
	for i = 0; i < 5; i++ {
		array2[i] = array[4-i]
	}
	fmt.Println(array2)
}