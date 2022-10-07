/*
    Essa função retorna a pontuação de um time
    de futebol, onde vitorias geram 3 pontos,
    empates geral 1 ponto e derrotas não geram pontos
*/

function FootballPoints(wins, draws, losses) {
    const winsPoints = wins * 3
    const drawsPoints = draws * 1
    const lossesPoints = losses * 0
    
    return winsPoints + drawsPoints + lossesPoints
}

module.exports = FootballPoints