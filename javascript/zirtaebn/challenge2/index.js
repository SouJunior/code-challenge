var readline = require('readline');
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
terminal: false
});

rl.setPrompt('Digite os números de vitórias, empates e derrotas: ');
rl.prompt();

rl.on('line', pointsString => {

   
    const [wins, draws, losses]  = pointsString.split(' ')
    .map(pointString => parseFloat(pointString));

    const footballPoints = (wins*3) + (draws*1) + (losses*0);

    console.log('O time obteve esses pontos até agora:', footballPoints);
})