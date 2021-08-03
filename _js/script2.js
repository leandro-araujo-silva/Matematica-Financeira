let c = 100
let juros = 20
let temp = 2
let montante = c*(1+juros/100)**temp
let resultado = montante.toFixed(2)
console.log(`Montante: ${resultado}`)