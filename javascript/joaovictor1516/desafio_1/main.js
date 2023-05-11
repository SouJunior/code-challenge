const numero1 = document.querySelector("#numero1"),
numero2 = document.querySelector("#numero2"),
resultado = document.querySelector("#resultado"),
somar = document.querySelector("#somar");

function soma(){
    resultado.innerHTML = "Resultado: ";
    const soma = Number(numero1.value) + Number(numero2.value);
    if(isNaN(soma)){
        resultado.innerHTML = "Valores inválidos.";
        return "Os valores inválidos."
    } else {
        resultado.innerHTML += soma
        return soma;
    }
}
somar.addEventListener("click", soma)