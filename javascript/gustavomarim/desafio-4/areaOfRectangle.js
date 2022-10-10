const area = (side1, side2) => {
  if (typeof side1 !== 'number' || typeof side2 !== 'number')
    return 'Digite um número válido';

  if (side1 <= 0 || side2 <= 0) return -1;

  return side1 * side2;
}

console.log(area(3, 4));
console.log(area(10, 11));
console.log(area(-1, 5));
console.log(area(0, 2));
console.log(area(0, '1'));