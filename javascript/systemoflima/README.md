<div align="center">

# Code Challenge

</div>

Esse desafios conta com quatro funções a serem realizados, são eles:

 - Primeiro: Somar dois numeros e retorna o resultado. 
 - Segundo: Calcular os pontos de futebol e retorna o resultado.
 - Terceiro: Inverter um array, seja ele de Strings ou Numbers.
 - Quarto: Calcular a área de um retangulo.

## Execução e Testes do código

O código tem duas formas de ser executado, são eles:

 - Code Runner (Extensão VScode): 
 ```
    ctrl + alt + N
 ```
 > Lembre se de está com o arquivo index.js aberto.

 - NodeJS:
 ```bash
    # Terminal
    $ node index.js 
 ```

 > obs: caso use o node certifique se que o tenha instalado em sua maquina, isso pode ser visto abrindo o terminal e digitando "node -v" ou "node --version".

## Sobre as funções

 - Função Sum: Recebe dois parametros e retorna o resultado da soma.
 > Exemplo: Sum(2, 5) => 7
 
 - Função FootballPoints: Recebe três parâmetros, sendo numero de vitórias, empates e derrotas, respectivamente.
 > Os pontos são calculados com base na tabela de pontuação.

 | Condição | Pontos |
 | ---      | ---    |
 | Vitórias |   3    |
 | Empates  |   1    |
 | Derrotas |   0    |

 > Exemplo: FootballPoints(5, 2, 2) => 17 pontos  

 - Função ReverseArray: Recebe um array e retorna o mesmo invertido.
 > Exemplo: ReverseArray([1,2,3,4,5]) => [5,4,3,2,1]

 - Função AreaRectangle: Recebe dois parâmetros e calcula a área do retangulo, caso o valor seja invalido ela retornara -1.
 > Exemplo: AreaRectangle(3, 4) => 12