const numero = document.querySelector("#numero"),
adicionar = document.querySelector("#adicionar"),
inverter = document.querySelector("#inverter"),
resultado = document.querySelector("#resultado");

const lista = [];

adicionar.addEventListener("click", () => {
    if (numero.value === "" || isNaN(Number(numero.value))) {
        resultado.innerHTML = "Digite um número válido";
        return "Digite um número válido";
    } else{
        lista.push(Number(numero.value));
        numero.value = "";
        resultado.innerHTML = "Número adicionado na lista";
        return "Número adicionado na lista";
    }
});

inverter.addEventListener("click", () => {
    resultado.innerHTML = "Lista: ";

    const listaInvertida = []
    for(let i = lista.length - 1; i >= 0; i--){
        listaInvertida.push(lista[i]);
    }
    resultado.innerHTML += listaInvertida;

    return listaInvertida
})