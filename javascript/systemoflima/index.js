const SumNumbers = require('./1. Return the Sum of Two Numbers')
const FootballPoints = require('./2. Football points')
const ReverseAnArray = require('./3. Reverse an Array')
const AreaOfAReactangle = require('./4. Area of a Rectangle')

// Teste a função soma de dois numeros
const sumResult = SumNumbers(2, 2)
console.log(`2 + 2 = ${sumResult}`)

// Teste a função pontos de futebol
const footballPointsResult = FootballPoints(5,2,5)
console.log(`Pontuação do time com 5 vitorias, 2 empates e 5 derrotas: ${footballPointsResult} pontos`)

// Teste a função reverter array
const array = [1,2,3,4,5]
const revertedArray = ReverseAnArray([1,2,3,4,5])
console.log(`Array original = ${array}, Array invertido = ${revertedArray}`)

// Teste a função area de um retangulo
const areaRectangle = AreaOfAReactangle(4,5)
console.log(`Area do Retangulo é ${areaRectangle}`)