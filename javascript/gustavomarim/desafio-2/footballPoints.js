const numberInvalidMessage = () => 'Digite um número válido, maior que 0!';

const footballPoints = (win, draw, lose) => {
  if (typeof win !== 'number' ||
    typeof draw !== 'number' ||
    typeof lose !== 'number') {
    return numberInvalidMessage();
  }

  if (win < 0 || draw < 0 || lose < 0) {
    return numberInvalidMessage();
  }

  const winPoints = win * 3;
  const drawPoints = draw * 1;
  const losePoints = lose * 0;
  const totalPoints = winPoints + drawPoints + losePoints;

  return totalPoints;
};

console.log(footballPoints(-3, 4, 2));
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 1));