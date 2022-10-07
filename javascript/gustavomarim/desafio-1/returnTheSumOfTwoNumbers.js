const addition = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number')
    return 'Digite um número válido!';

  return num1 + num2;
};

console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));
console.log(addition('a', 3)); // error