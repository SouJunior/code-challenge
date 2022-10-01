// Pontos de time de futebol.

const footballTeamPoints = (wins, draws, losses) => {
    if (wins < 0 || draws < 0 || losses < 0) return console.log("Invalid values, this function accepts only numbers greater than 0");

    wins = Number(wins)*3;
    losses = 0;

    const points = wins + Number(draws) + losses;

    return points;
}

console.log(footballTeamPoints("3", "1", "5"));