function footballPoints(wins, draws, losses) {
    const points = {
        wins: 3,
        draws: 1,
        losses: 0
    }

    const pointsSum = points.wins * wins + points.draws * draws + points.losses * losses

    return `O time fez, ao todo, ${pointsSum} pontos.`
}

console.log(footballPoints(3, 4, 2))
console.log(footballPoints(5, 0, 2))
console.log(footballPoints(0, 0, 1))