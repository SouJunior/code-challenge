package main

import "fmt"

func main() {

	fmt.Println(footballPoints(5, 0, 2))
}

func footballPoints(wins int, draws int, losses int) int {
	return (wins * 3) + draws
}
