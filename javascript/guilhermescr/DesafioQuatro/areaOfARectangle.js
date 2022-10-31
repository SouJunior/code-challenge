function area(n1, n2) {
  if (n1 <= 0 || n2 <= 0) {
    return console.log(-1);
  }

  let rectangleArea = n1 * n2;

  return console.log(rectangleArea);
}

area(3, 4);
area(10, 11);
area(-1, 5);
area(0, 2);
