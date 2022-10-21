package main

func main() {
	println(footballPoints(3, 4, 2))
	println(footballPoints(5, 0, 2))
	println(footballPoints(0, 0, 1))
}

func footballPoints(wins, draws, losses int) int {
	var result int = 0

	if wins > 0 {
		result += wins * 3
	}
	if draws > 0 {
		result += draws * 1
	}
	if losses > 0 {
		result += 0
	}

	return result
}
