function footballPoints(wins, draws, losses) {
	winsPoints = 3 * wins 
	drawsPoints = 1 * draws
	lossesPoints = 0 * losses
	total = winsPoints + drawsPoints + lossesPoints
  return total
}

console.log(footballPoints(3, 4, 2))