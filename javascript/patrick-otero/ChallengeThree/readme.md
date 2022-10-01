## Return the sum of two numbers.

### Como usar:
        1. Vá até a linha onde está escrito: "console.log(reverseArray([1, 2, 3, 4, 5]));" 
        2. Substitua os valores dentro dos colchetes, separados por vírgula, ou acrescente novos valores se quiser. A função espera um "array" como parâmetro.

### Como testar:
        - Vá até a pasta javascript/patrick-otero/ChallengeThree
        - Visualize e altere se quiser o arquivo "challenge.js" clicando nele no seu editor de texto dentro da pasta citada no passo anterior
        - Abra seu console dentro da mesma pasta, onde está o arquivo "challenge.js", e digite o comando: "node challenge". sem as aspas.

### Resolução:

 - Sua funcionalidade consiste em:
    1. Criar um "array" novo e populá-lo com os valores do "array" inserido como parâmetro de trás para frente, através de um "for de c" começando da última posição do array e regredindo até a primeira, e, enviando os valores, um de cada vez, através do método de "arrays" "push", os valores para o novo "array" criado.