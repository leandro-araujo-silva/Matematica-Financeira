function calcular() {
  let cap = document.getElementById('capital').value
  let juros = document.getElementById('juros').value
  let temp = document.getElementById('tempo').value
  let tipo = document.getElementsByName('opcoes')
  let resp = document.getElementById('res')

  
  let montante = 0

  if (tipo[0].checked) {
    montante = (Number(cap * (juros/100) * temp) + Number(cap)).toFixed(2)
    /*montante = cap + juro*/
  } else if (tipo[1].checked) {
    montante = Number(cap * (1 + juros / 100) ** temp).toFixed(2)
  }

  let res = montante
  resp.innerHTML = `Olá, o seu montante equivale a R$ ${res}.`
}
