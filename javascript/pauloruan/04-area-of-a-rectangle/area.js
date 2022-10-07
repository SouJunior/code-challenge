function area(h, w) {
  if (h <= 0 && w <= 0) {
    return -1;
  } else {
    return h * w;
  }
}

console.log(area(3, 4));
