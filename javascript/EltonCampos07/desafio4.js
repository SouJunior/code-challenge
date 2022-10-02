/*
    Area of a Rectangle
    Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.
*/



/* 

Retorno da função é o resultado da operação, por fim, é apresentado no terminal.
Caso os valores passados no argumentos sejam inválidos, o retorno da função será -1.

*/

function area(base, height){
    return (base * height) || -1
}

//Função area é invocada com dois argumentos. 

console.log(area(3, 4))