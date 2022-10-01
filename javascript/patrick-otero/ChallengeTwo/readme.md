## Return the sum of two numbers.

### Como usar:
        1. Vá até a linha onde está escrito: "console.log(footballTeamPoints("3", "1", "5"));" 
        2. Substitua os valores "3", "1" e "5" pelos valores que deseja usar para calcular os pontos do time. A função aceita tanto "number" quanto "string".

### Como testar:
        - Vá até a pasta javascript/patrick-otero/ChallengeTwo
        - Visualize e altere se quiser o arquivo "challenge.js" clicando nele no seu editor de texto dentro da pasta citada no passo anterior
        - Abra seu console dentro da mesma pasta, onde está o arquivo "challenge.js", e digite o comando: "node challenge". sem as aspas.

### Resolução:

 - Sua funcionalidade consiste em:
    1. Multiplicar o primeiro parâmetro "wins" por 3, já que o mesmo vale 3 pontos.
    2. Não alterar o segundo parâmetro, "draws", já que o mesmo vale 1 ponto.
    3. declarar sempre o valor de "losses", o terceiro parâmetro, como zero, já que o mesmo vale nenhum ponto.
 - Extra:
    1. A função transforma os parâmetros para o tipo "number" para que a mesma possa receber "strings" que podem ser convertidas internamente pelo "js" para número.