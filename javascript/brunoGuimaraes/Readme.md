<div align="center">

# Code Challenge

</div>

Esse desafios conta com quatro funções a serem realizados, são eles:

- Primeiro: Somar dois numeros e retorna o resultado.
- Segundo: Calcular os pontos de futebol e retorna o resultado.
- Terceiro: Inverter um array, seja ele de Strings ou Numbers.
- Quarto: Calcular a área de um retangulo.

## Execução e Testes do código

Ao entrar na página do projeto, ir até o arquivo index.js que se encontra na raiz da pasta.

No topo do arquivo index, encontram-se 4 variveis, que são: somaDoisValores, somaPontosFutebol, arrayReverso e calcAreaRetangulo

# Desafio 1

// funcao que retorna a soma dois valores, caso o parametro passado não seja um número, retorna -1.
const resultadoSomaValores = somaDoisValores(7, 6)
console.log(resultadoSomaValores)

# Desafio 2

// Funcao que soma os pontos de um time de futebol, a ordem dos parametros precisa estar correta, seguindo o modelo abaixo. Caso o parametro passado não seja um número, retorna -1.
const vitorias = 11
const empates = 1
const derrotas = 0

const pontosFlamengo = somaPontosFutebol(vitorias, empates, derrotas)
console.log(pontosFlamengo)

# Desafio 3

// Inverter um array, seja ele de Strings ou Numbers
const ArrayInvertido = arrayReverso(["Ana", 'Rita', 'Joana', 'Iracema', 'Carolina'])
console.log(ArrayInvertido)

# Desafio 4

// Calcular a área de um retangulo.
const areaRetangulo = calcAreaRetangulo(3,4)
console.log(areaRetangulo)
