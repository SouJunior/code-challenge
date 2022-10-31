Neste desafio, você aprenderá o uso simples de funções em C. Funções são um monte de instruções agrupadas.
Uma função é fornecida com zero ou mais argumentos e executa as instruções nela. Com base no tipo de retorno, ele não retorna nada (void) ou algo assim.

Um exemplo de sintaxe para uma função é:


        return_type function_name(arg_type_1 arg_1, arg_type_2 arg_2, ...) {
    	  ...
        ...
        ...
        [if return_type is non void]
        	return something of type `return_type`;
    }
    
  Por exemplo, uma função para ler quatro variáveis e retornar a soma delas pode ser escrita como
  
  
        int sum_of_four(int a, int b, int c, int d) {
    	  int sum = 0;
        sum += a;
        sum += b;
        sum += c;
        sum += d;
        return sum;
    }
    
    
    += : Add and assignment operator. It adds the right operand to the left operand and assigns the result to the left operand.

a += b is equivalent to a = a + b;


Task

Escreva uma função int max_of_four(int a, int b, int c, int d)que leia quatro argumentos e retorne o maior deles.

Note

Não há maxfunction embutido em C. O código que será reutilizado geralmente é colocado em uma função separada, por exemplo, int max(x, y)que retorna o maior dos dois valores.
