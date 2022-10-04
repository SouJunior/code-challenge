const inputEl = document.querySelector('#inputArray')
const buttonEl = document.querySelector('#button')
const resultEl = document.querySelector('#resultado')

buttonEl.addEventListener('click', revertArr)

function revertArr() {
  const regex = /\s*,|;\s*/
  const temp = inputEl.value
  const newArr = temp.split(regex)
  const newArrRev = temp.split(regex).reverse()

  console.log(`Arr ${typeof newArr} Rev ${typeof newArrRev}`)

  resultEl.innerHTML = `[${newArr}] < > [${newArrRev}]`
  clearInput()
}

function clearInput() {
  inputEl.value = ''
}
