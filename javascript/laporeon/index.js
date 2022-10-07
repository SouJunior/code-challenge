function reverse(array) {
  let reversedArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray = [...reversedArray, array[index]];
  }

  return reversedArray;
}

console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));
console.log([]);
