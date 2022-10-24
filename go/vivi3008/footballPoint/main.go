package main

import "fmt"

type Points struct {
	Wins  int
	Draws int
	Loses int
}

func main() {
	matche1 := Points{
		Wins:  3,
		Draws: 4,
		Loses: 2,
	}
	matche2 := Points{
		Wins:  5,
		Draws: 0,
		Loses: 2,
	}
	matche3 := Points{
		Wins:  0,
		Draws: 0,
		Loses: 1,
	}
	fmt.Println(footballPoints(matche1))
	fmt.Println(footballPoints(matche2))
	fmt.Println(footballPoints(matche3))
}

func footballPoints(points Points) int {
	result := points.Wins*3 + points.Draws

	return result
}
