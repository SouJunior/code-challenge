# Reverter um array

Essa é a resolução do terceiro desafio.

Execute o arquivo index.html, os resultados serão exibidos no navegador, toda a lógica se encontra no arquivo main.js

## O quê o programa faz?

Este programa exibe o array digitado pelo usuário seguindo as orientações, separando os valores por vírgula ou ponto-e-vírgula e o mesmo array com sua ordem invertida. Caso o campo esteja em branco uma mensagem de erro é exibida.

### Funções

- **validateInput**: função que apenas checa se o input está vazio e exibe uma mensagem erro. Como se trata de um array que pode ser letras, numérico ou até alfanumérico decidi não tornar essa etapa muito complexa.

- **clearInput**: função que limpa o input, ela é chamada após exibir os resultados.

- **revertArr**: função responsável por reverter o array. O valor do input é armazenado em uma variável *temp* que então é separada através do método *split* usando um regex para capturar o ',' e ';'. Uma outra variável é usada para armazenar o array invertido com a função *reverse()*. Em seguida o resultado é exibido em um elemento logo abaixo dos campos, usando o textContent para injetar o valores.