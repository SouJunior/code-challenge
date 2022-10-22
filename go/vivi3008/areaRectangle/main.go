package main

import "fmt"

type Rectangle struct {
	Base   float32
	Heigth float32
}

func main() {
	rectangle1 := Rectangle{
		Base:   3,
		Heigth: 4,
	}
	rectangle2 := Rectangle{
		Base:   10,
		Heigth: 11,
	}
	rectangle3 := Rectangle{
		Base:   -1,
		Heigth: 5,
	}
	rectangle4 := Rectangle{
		Base:   0,
		Heigth: 2,
	}

	fmt.Println(areaRectangle(rectangle1))
	fmt.Println(areaRectangle(rectangle2))
	fmt.Println(areaRectangle(rectangle3))
	fmt.Println(areaRectangle(rectangle4))
}

func areaRectangle(rec Rectangle) float32 {
	if rec.Base <= 0 || rec.Heigth <= 0 {
		return -1
	}

	return rec.Base * rec.Heigth
}
