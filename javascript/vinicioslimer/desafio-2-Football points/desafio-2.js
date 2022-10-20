//Essa função passa por parametros as vitorias, empates e derrotas respectivamente para calcular os pontos
function futebolPontos(v, e, d) {
    let vitorias = v * 3
    let empates = e * 1
    let derrotas = d * 0
    let pontos = v + e + d

    return pontos
}