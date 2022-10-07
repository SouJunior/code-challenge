// Somar dois numeros e retorna o resultado.
function somaDoisValores(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return  x + y
    }else{
        return -1
    }
    
}

module.exports = somaDoisValores
