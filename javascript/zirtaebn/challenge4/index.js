var readline = require('readline');
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
terminal: false
});

rl.setPrompt('Digite as medidas dos lados do retângulo: ');
rl.prompt();

rl.on('line', arguments => {

    const [num1, num2] = arguments.split(' ');
    const area = () => {

        if(num1 < 0 || num2 < 0) return -1;

        return num1 * num2;
    }

    console.log(area());
})