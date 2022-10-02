//function calculopontos(vitorias, empates, derrotas) {
//    return (vitorias * 3) + (empates * 1)
//}

let definiçãoVitoria = 3,
    definiçãoEmpate = 1,
    definiçãoDerrota = 0;

function calculopontos(vitorias, empates, derrotas) {
    return definiçãoVitoria * vitorias + definiçãoEmpate * empates + definiçãoDerrota * derrotas;
}

console.log(calculopontos(3, 4, 2))
console.log(calculopontos(5, 0, 2))
console.log(calculopontos(0, 0, 1))