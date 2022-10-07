Para calcular o saldo de pontos no futebol, sabemos que: 

Vitoria = 3
Empate = 1
Derrota = 0

Sabendo disso, precisamos criar as entradas e essas entradas serão números >= 0.

Existem duas formas de se fazer, a primeira comentada é a mais fácil pois todo número multiplicado por 0 é 0, então não é necessária a multiplicação no saldo.

Sobrando assim duas contas, como todo número multiplicado por 1 é ele mesmo, não precisamos multiplicar, se o time empatar 3 vezes, 3 * 1 = 3 ou seja, sempre será o mesmo valor independente do resultado.

Logo, sobra o valor mais complexo que é o caso da vitória. A forma mais simples de solucionar esse problema é que sempre o valor vitoria será multiplicado por 3:
vitoria * 3

Ou seja, no todo poderia ficar

function calculopontos(vitorias, empates, derrotas) {
	return vitorias * 3 + empates;
}

A forma mais complexa que deixei é na verdade o passo a passo explicado aqui.