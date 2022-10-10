// area(3, 4) ➞ 12
// area(10, 11) ➞ 110
// area(-1, 5) ➞ -1
// area(0, 2) ➞ -1

const getArea = (a, b) => {
  return !a | !b | a < 0 | b < 0 ? -1 : parseInt(a) * parseInt(b);
};
