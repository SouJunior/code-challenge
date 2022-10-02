
/*

Football Points

Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

 - wins get 3 points
 - draws get 1 point
 - losses get 0 points

*/

//Retorno da função é o resultado da operação, por fim, é apresentado no terminal.

function footballPoints(wins, draws, losses){
    const [pointsWins, pointsDraws, pointsLosses] = [3, 1, 0]
    return wins * pointsWins + draws * pointsDraws + losses * pointsLosses
}

//Função footballPoints é invocada com três argumentos. 

console.log(footballPoints(3, 4, 2))