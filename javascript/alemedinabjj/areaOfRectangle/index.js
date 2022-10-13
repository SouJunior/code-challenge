//area of rectangle challenge

function areaOfRectangle(length, width) {
  if (length <= 0 || width <= 0) {
    return -1;
  }

  return length * width;
}

console.log(areaOfRectangle(3, 4));
console.log(areaOfRectangle(10, 11));
console.log(areaOfRectangle(-1, 5));
console.log(areaOfRectangle(0, 2));
