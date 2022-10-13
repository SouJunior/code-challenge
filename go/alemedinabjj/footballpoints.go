package main

import (
	"fmt"
)

func main() {
	var wins, draws, losses int
	fmt.Println("Enter the number of wins: ")
	fmt.Scan(&wins)
	fmt.Println("Enter the number of draws: ")
	fmt.Scan(&draws)
	fmt.Println("Enter the number of losses: ")
	fmt.Scan(&losses)
	fmt.Println("The total number of points is: ", wins*3+draws)
}

