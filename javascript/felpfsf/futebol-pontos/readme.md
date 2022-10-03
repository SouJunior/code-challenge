# Pontuação de futebol

Essa é a resolução do segundo desafio.

Execute o arquivo index.html, os resultados serão exibidos no navegador, toda a lógica se encontra no arquivo main.js

## O quê o programa faz?

Este programa exibe a pontuação da equipe assim que o usuário enviar os dados no formulário, caso algum campo seja preenchido de forma irregular uma mensagem de erro é exibida informando o usuário, em caso de sucesso o resultado é exibido abaixo em uma tabela, informando não somente a quantidade total de pontos mas também o número total de partidas e as vitórias, empates e derrotas, simulando uma tabela de campeonato. Tomei a liberdade de acrescentar essas funcionalidades extras no app.

### Funções

- **collecDataForm**: criei essa função para coletar informações do form, um objeto chamado '*time*' recebe os valores dos inputs, a soma dos pontos através da função '**calcPontos**', e o número total de partidas através da função '**calcTotalJogos**'.
  
- **calcPontos** e **calcTotalJogos**: para calcular os pontos multipliquei a quantidade de vitorias por 3 e somei a quantidade de empates, derrotas não é necessário nesse caso já que elas tem valor 0. No calculo do total de partidas eu apenas somei as quantidades de vitorias, empates e derrotas informadas.
  
- **addDataTable**, **montaTr**, **montaTd**: para exibir os dados criei essas 3 funções para construir a tabela. **montaTr** é uma função que cria as linhas da tabela, recebendo o objeto time é passado então para a função **montaTd**, que por sua vez irá adicionar às celulas os valores do objeto time e o estilo aplicado. **addDataTable** recebe o objeto time, dentro dela a variável *timeTr* recebe da função montaTr os elementos da tabela criada e então é acrescentada na tabela do navegador.

- **validateData**: o propósito dessa função é validar os campos e criar as mensagens de erros para exibir para o usuário. As mensagens de erros são armazenadas em um array. Para verificar os campos foi utilizada duas condições simples, verificar se o usuário está digitando um valor numérico inteiro com o auxílio de uma regex e verificar se o campo está vazio usando o length.
  
- **showErrorMessage**: nessa função a lista de erros da validateData é recebida para criar um elemento HTML de lista e exibir então os erros encontrados.