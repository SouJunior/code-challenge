var readline = require('readline');
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
terminal: false
});

rl.setPrompt('Digite os números de um array: ');
rl.prompt();

rl.on('line', arrayString => {

    const arr = [...arrayString]

    console.log('Array invertido:', arr.reverse());
})