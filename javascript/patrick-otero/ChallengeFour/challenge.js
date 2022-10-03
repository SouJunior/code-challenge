// Calcular a área de um retângulo.

const rectangleAreaCalc = (base, height) => Number(base) <= 0 || Number(height) <= 0 ? -1 : Number(base)*Number(height)

console.log(rectangleAreaCalc("12", "7"));