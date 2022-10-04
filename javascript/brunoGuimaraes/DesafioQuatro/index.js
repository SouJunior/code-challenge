// Calcular a área de um retangulo.

function calcAreaRetangulo(area, comprimento) {
    if (area <= 0 || comprimento <= 0) {
        return -1
    }

    return area * comprimento
}


module.exports = calcAreaRetangulo