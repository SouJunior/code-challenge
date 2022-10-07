const btnEl = document.querySelector('#calcular')
const formEl = document.querySelector('#formPontos')
const errorsListEl = document.querySelector('#errorsMsg')
const tabelaEl = document.querySelector('#tabelaPontos')

btnEl.addEventListener('click', e => {
  e.preventDefault()
  let form = formEl
  let time = collectFormData(form)
  // console.log(time)

  let errors = validateData(time)
  // console.log(errors)
  if (errors.length > 0) {
    showErrorMessage(errors)
    return
  }

  addDataTable(time)
  form.reset()
  let errorsMsg = errorsListEl
  errorsMsg.innerHTML = ''
})

function collectFormData(form) {
  let time = {
    vitorias: form.inpVit.value,
    empates: form.inpEmp.value,
    derrotas: form.inpDer.value,
    pontos: calcPontos(
      parseInt(form.inpVit.value),
      parseInt(form.inpEmp.value)
    ),
    jogos: calcTotalJogos(
      parseInt(form.inpVit.value),
      parseInt(form.inpEmp.value),
      parseInt(form.inpDer.value)
    )
  }
  return time
}

function calcPontos(vit, emp) {
  let pontos = vit * 3 + emp
  return pontos
}

function calcTotalJogos(vit, emp, der) {
  let total_jogos = vit + emp + der
  return total_jogos
}

function addDataTable(time) {
  let timeTr = montaTr(time)
  let tabelaPontos = tabelaEl
  tabelaPontos.appendChild(timeTr)
}

function montaTr(time) {
  let timeTr = document.createElement('tr')

  timeTr.appendChild(montaTd(time.jogos, 'tabela__Tjogos'))
  timeTr.appendChild(montaTd(time.pontos, 'tabela__Tpontos'))
  timeTr.appendChild(montaTd(time.vitorias, 'tabela__vit'))
  timeTr.appendChild(montaTd(time.empates, 'tabela__emp'))
  timeTr.appendChild(montaTd(time.derrotas, 'tabela__der'))

  return timeTr
}

function montaTd(data, style) {
  let timeTd = document.createElement('td')
  timeTd.textContent = data
  timeTd.classList.add(style)

  return timeTd
}

function validateData(time) {
  let errors = []
  let regex = /^\d+$/

  if (time.vitorias.length === 0 || !regex.test(time.vitorias)) {
    errors.push('Valor incorreto no campo Vitórias')
  }

  if (time.empates.length === 0 || !regex.test(time.empates)) {
    errors.push('Valor incorreto no campo Empates')
  }

  if (time.derrotas.length === 0 || !regex.test(time.derrotas)) {
    errors.push('Valor incorreto no campo Derrotas')
  }

  return errors
}

function showErrorMessage(errors) {
  let ul = errorsListEl
  ul.innerHTML = ''
  errors.forEach(error => {
    let li = document.createElement('li')
    li.textContent = error
    ul.appendChild(li)
  })
}
