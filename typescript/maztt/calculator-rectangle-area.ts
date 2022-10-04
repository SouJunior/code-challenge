function area(width: number = 0, height: number = 0): number {
  const result = width <= 0 || height <= 0 ? -1 : width * height;
  return result;
}

console.log(area(3, 4));
console.log(area(10, 11));
console.log(area(-1, 5));
console.log(area(0, 2));
console.log(area(4));
console.log(area());
