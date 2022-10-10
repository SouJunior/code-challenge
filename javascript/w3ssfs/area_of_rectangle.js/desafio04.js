const calcRectangleArea = (height , width) => {
    if (height <= 0 || width <= 0) {
        return -1;
    }

    return height * width;

};

console.log(calcRectangleArea(2, 5)) // 10