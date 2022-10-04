const assert = require('assert');

/**
 * Retorna o número de vitórias\
 * wins - vale 3 pontos\
 * draws - vale 1 ponto\
 * _losses - vale 0
 * @param {number} wins
 * @param {number} draws
 * @param {number} _losses
 * @returns {number}
 */
const footballPoints = (wins, draws, _losses) => wins * 3 + draws;

// Examples
assert.equal(footballPoints(3, 4, 2), 13);
assert.equal(footballPoints(5, 0, 2), 15);
assert.equal(footballPoints(0, 0, 1), 0);
console.log('passed');
