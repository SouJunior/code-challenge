const base = document.querySelector("#base"),
altura = document.querySelector("#altura"),
calcular = document.querySelector("#calcular"),
resultado = document.querySelector("#resultado");

calcular.addEventListener("click", () => {
    resultado.innerHTML = "Area: ";
    const area = Number(base.value) * Number(altura.value);
    
    if(isNaN(area) || area <= 0){
        resultado.innerHTML = -1;
        return -1;
    } else{
        resultado.innerHTML += area;
        base.value = "";
        altura.value = "";
        return area;
    }
})