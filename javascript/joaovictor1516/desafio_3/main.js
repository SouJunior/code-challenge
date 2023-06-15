const numero = document.querySelector("#numero"),
adicionar = document.querySelector("#adicionar"),
inverter = document.querySelector("#inverter"),
resultadoLista = document.querySelector("#resultado_lista"),
resultadoListaInvertida = document.querySelector("#resultado_lista_invertida");

const lista = [];

adicionar.addEventListener("click", () => {
    resultadoLista.innerHTML = "Lista: "

    if (numero.value === "" || isNaN(Number(numero.value))) {
        window.alert("Digite um número válido");
        return "Digite um número válido";
    } else{
        lista.push(Number(numero.value));
        numero.value = "";
        resultadoLista.innerHTML = `Lista: [${lista}]`;
        return lista;
    }
});

inverter.addEventListener("click", () => {
    resultadoListaInvertida.innerHTML = "Lista invertida: ";

    if(lista.length === 0){
        window.alert("A lista esta vazia");
        return "A lista está vázia";
    }

    const listaInvertida = [];
    for(let i = lista.length - 1; i >= 0; i--){
        listaInvertida.push(lista[i]);
    }
    resultadoListaInvertida.innerHTML = `Lista invertida: [${listaInvertida}]`;
    return listaInvertida
})