function reverse(arr) {
	arrayReverse = [];
  for (let index = arr.length - 1; index >= 0; index -= 1) {
  	arrayReverse.push(arr[index]);
  }
  return arrayReverse;
}
