var readline = require('readline');
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
terminal: false
});

rl.setPrompt('Digite dois números: ');
rl.prompt();

rl.on('line', numbersString => {

   
    const numbersArray = numbersString.split(' ')
    .map(numberString => parseFloat(numberString));

    const sum = numbersArray.reduce((total, number) => {

        return total + number
    })

    console.log('A soma dos dois números é igual a:', sum);
})