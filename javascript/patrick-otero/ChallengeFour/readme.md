## Area of a Rectangle.

### Como usar:
        1. Vá até a linha onde está escrito: "console.log(rectangleAreaCalc(12, 7));" 
        2. Substitua os valores "12"(base) e "7"(altura) pelos valores que deseja usar para calcular a área do retângulo. A função aceita tanto "number" quanto "string".

### Como testar:
        - Vá até a pasta javascript/patrick-otero/ChallengeFour
        - Visualize e altere se quiser o arquivo "challenge.js" clicando nele no seu editor de texto dentro da pasta citada no passo anterior
        - Abra seu console dentro da mesma pasta, onde está o arquivo "challenge.js", e digite o comando: "node challenge". sem as aspas.

### Resolução:

 - Sua funcionalidade consiste em:
    1. Verificar através de um ternário se os valores "base" e "height" são menores ou iguais a zero.
    2. Retornar "-1" caso a condicional citada na funcionalidade 1 seja verdadeira.
    3. Retornar a multiplicação de "base" e "height" caso a condicional da funcionalidade 1 seja falsa.

 - Extra:
    1. A função transforma os parâmetros para o tipo "number" para que a mesma possa receber "strings" que podem ser convertidas internamente pelo "js" para número.