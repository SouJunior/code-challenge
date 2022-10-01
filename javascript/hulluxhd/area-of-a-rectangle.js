function rectangleArea(width, height) {
    if (width <= 0 || height <= 0) return -1;

    return width * height
}

console.log(rectangleArea(3, 4))
console.log(rectangleArea(10, 11))
console.log(rectangleArea(-1, 5))
console.log(rectangleArea(0, 2))
