const numXEl = document.querySelector('#numX')
const numYEl = document.querySelector('#numY')
const resultEl = document.querySelector('#result')
const errorEl = document.querySelector('#error')
const btnEl = document.querySelector('#calcBtn')

btnEl.addEventListener('click', checkInput)

function checkInput(event) {
  event.preventDefault()

  if (numXEl.value === '' || numYEl.value === '') {
    return (errorEl.textContent = 'Informe um valor válido')
  } else {
    return (errorEl.textContent = ''), soma(numXEl, numYEl)
  }
}

function soma() {
  let resultado = parseFloat(numXEl.value) + parseFloat(numYEl.value)
  resultEl.textContent = `${numXEl.value} + ${numYEl.value} = ${resultado}`
  clearInput()
}

function clearInput() {
  numXEl.value = ''
  numYEl.value = ''
}
