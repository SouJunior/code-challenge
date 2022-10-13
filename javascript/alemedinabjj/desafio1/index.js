function sum() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;

  if (number1 === "" || number2 === "") {
    return alert("Por favor, preencha os campos");
  }

  let result = parseInt(number1) + parseInt(number2);
  document.getElementById("result").innerHTML = "Result: " + result;
}
