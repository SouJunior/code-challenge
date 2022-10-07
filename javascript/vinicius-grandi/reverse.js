const assert = require('assert');

/**
 * Inverte e retorna os valores do array usado como argumento
 * @param {any[]} arr
 */
function reverse(arr) {
  const res = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    res.push(arr[i]);
  }
  return res;
}

// Examples
assert.deepEqual(reverse([1, 2, 3, 4]), [4, 3, 2, 1]);
assert.deepEqual(reverse([9, 9, 2, 3, 4]), [4, 3, 2, 9, 9]);
assert.deepEqual(reverse([]), []);
console.log('passed');
