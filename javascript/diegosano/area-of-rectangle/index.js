const calculateRectangleArea = (height, width) => {
  if (height <= 0 || width <= 0) {
    return -1;
  }

  return height * width;
};

console.log(calculateRectangleArea(3, 4)); // 12
console.log(calculateRectangleArea(10, 11)); // 110
console.log(calculateRectangleArea(-1, 5)); // -1
console.log(calculateRectangleArea(0, 2)); // -1