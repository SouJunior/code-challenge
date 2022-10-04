const assert = require('assert');

/**
 * Retorna a soma dos parâmetros;
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const addition = (a, b) => a + b;

// Examples
assert.equal(addition(3, 2), 5);
assert.equal(addition(-3, -6), -9);
assert.equal(addition(7, 3), 10);
console.log('passed');
