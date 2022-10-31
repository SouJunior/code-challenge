function footballPoints(wins, draws, losses) {
    const validation = [wins, draws, losses].every(element => typeof element === 'number' && element >= 0) ? "Valid" : "Invalid"
    if(validation === 'Invalid') return "Check your inputs"
    const winPoints = 3
    const drawPoints = 1
    const losePoints = 0

    const totalPoints = winPoints * wins + drawPoints * draws + losePoints * losses
    return totalPoints
}

//Teste
console.log(footballPoints(10,10,10))
console.log(footballPoints(-10,10,10))
console.log(footballPoints(10,10,'abc'))
