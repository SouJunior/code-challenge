const assert = require('assert');

/**
 * Retorna o valor da área de um retângulo, caso o valor seja inválido, retorna -1
 * @param {number} a base ou altura
 * @param {number} b base ou altura
 * @returns {number}
 */
const area = (a, b) => {
  if (a < 1 || b < 1) {
    return -1;
  }
  return a * b;
};

// Examples
assert.equal(area(3, 4), 12);
assert.equal(area(10, 11), 110);
assert.equal(area(-1, 5), -1);
assert.equal(area(0, 2), -1);
console.log('passed');
