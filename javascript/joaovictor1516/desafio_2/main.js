const vitorias = document.querySelector("#vitorias"),
empates = document.querySelector("#empates"),
derrotas = document.querySelector("#derrotas"),
calcular = document.querySelector("#calcular"),
pontos = document.querySelector("#pontos");

calcular.addEventListener("click", () => {
    pontos.innerHTML = "O time teve: ";

    const pontuacao = Number(vitorias.value) * 3 + Number(empates.value);

    if(isNaN(pontuacao)){
        pontos.innerHTML = "Valores inválidos.";
        return "Valores inválidos.";
    }else{
        pontos.innerHTML += pontuacao;
        return pontuacao;
    }
});