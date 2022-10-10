const reverseArray = (arr) => {
  const reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

console.log(reverseArray([1, 2, 3, 4])) // [4, 3, 2, 1]
console.log(reverseArray([9, 9, 2, 3, 4])) // [4, 3, 2, 9, 9]
console.log(reverseArray([])) // []