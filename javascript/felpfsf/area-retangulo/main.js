const inpXEl = document.querySelector('#inpX')
const inpYEl = document.querySelector('#inpY')
const btnCalcEl = document.querySelector('#btnCalc')
const resultEl = document.querySelector('#resultado')

btnCalcEl.addEventListener('click', e => {
  e.preventDefault()
  validateInput()
})

function validateInput() {
  if (inpXEl.value.length === 0 || inpYEl.value.length === 0) {
    return (resultEl.innerHTML = showErrorMessage()), inpXEl.focus()
  }
  if (inpXEl.value <= 0 || inpYEl.value <= 0) {
    return (resultEl.innerHTML = showErrorMessage()), inpXEl.focus()
  }

  calcRectArea()
}

function calcRectArea() {
  let x = parseFloat(inpXEl.value)
  let y = parseFloat(inpYEl.value)

  let result = x * y

  resultEl.innerHTML = `A área do retângulo é <span class='result'>${result}</span>`

  clearInput()
}

function clearInput() {
  inpXEl.value = ''
  inpYEl.value = ''
  inpXEl.focus()
}

function showErrorMessage() {
  const error = `
  <span class='error__message'>
    Campo em branco ou valor incorreto, digite algum número válido maior que 0
  </span>
  `
  return error
}
