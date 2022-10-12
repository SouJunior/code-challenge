# Área do retângulo

Essa é a resolução do quarto desafio.

Execute o arquivo index.html, os resultados serão exibidos no navegador, toda a lógica se encontra no arquivo main.js

## O quê o programa faz?

Este programa exibe o resultado do cálculo da área do retângulo, o usuário deverá entrar com os valores nos campos correspondentes, esse valor não pode ser igual ou inferior a 0 ou algum outro caractere não numérico e então clicar em "Calcular" ou simplesmente apertar a tecla "Enter". Em caso de erro uma mensagem é exibida alertando o usuário para corrigir as informações. Já em caso de sucesso o resultado da operação é exibido normalmente.

### Funções

- **validateInput**: função que apenas checa se o input está vazio ou se foi informado um caractere menor ou igual a 0. Após a checagem, em caso de erro é chamada a função **showErrorMessage** com a mensagem e o focus é passado para o primeiro campo

- **clearInput**: função que limpa o input, ela é chamada após exibir os resultados.
  
- **calcRectArea**: função que irá calcular a área do retângulo multiplicando seus valores digitados no input, no caso armazenados em duas váriaveis, *X* e *Y* enquanto o resultado é armazenado numa terceira chamada result. Para exibir o resultado na tela utilizo o elemento *resultado* e adiciono o conteúdo da variável *result* dentro de uma tag *span* com uma classe predefinida para dar mais destaque ao resultado.