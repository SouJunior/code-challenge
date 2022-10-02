
/*
    Return the Sum of Two Numbers

    Create a function that takes two numbers as arguments and returns their sum.
*/

//Retorno da função é o resultado do método reduce e, por fim, é apresentado no terminal.

function addition(...number){
    return number.reduce((acc, cur) => acc += cur)
}

//Função addition é invocada com dois argumentos. 

console.log(addition(3, 2))


