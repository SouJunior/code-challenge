// Crie uma função que pegue o número de vitórias, empates e derrotas e calcule o número de pontos que um time de futebol obteve até agora.

function somaResultadoFutebol(v = 0, e = 0, d = 0) {
    if (typeof v !== 'number' || typeof e !== 'number' || typeof d !== 'number') {
        return -1
    }

    const vitorias = 3
    const empates = 1
    const derrotas = 0 

    const resultado = v * vitorias + (e * empates);

    
    return ("O total de pontos do seu time é: " + resultado + " pontos")
};




module.exports = somaResultadoFutebol