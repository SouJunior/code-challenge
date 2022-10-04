function area(width: number = 0, height: number = 0): number {
  return width <= 0 || height <= 0 ? -1 : width * height;
}

console.log(area(3, 4));
console.log(area(10, 11));
console.log(area(-1, 5));
console.log(area(0, 2));
console.log(area(4));
console.log(area());
