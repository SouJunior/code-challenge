const inputEl = document.querySelector('#inputArray')
const buttonEl = document.querySelector('#button')
const resultEl = document.querySelector('#resultado')

buttonEl.addEventListener('click', validateInput)
inputEl.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    validateInput()
  }
})

function revertArr() {
  const regex = /\s*,|;\s*/
  const temp = inputEl.value
  const newArr = temp.split(regex)
  const newArrRev = temp.split(regex).reverse()

  console.log(`Arr ${typeof newArr} Rev ${typeof newArrRev}`)

  resultEl.textContent = `[${newArr}] < > [${newArrRev}]`
  clearInput()
}

function clearInput() {
  inputEl.value = ''
}

function validateInput() {
  if (inputEl.value.length === 0) {
    return (resultEl.innerHTML = `
    <span class='error__message'>Campo em branco, digite um valor válido nos campos separados por ',' e/ou ';'</span>
    `)
  }
  revertArr()
}
