const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

// como o node faz cache de objetos o valor de B sera 3
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorB.valor)

// usando a função factori para instanciar não ha esse problema
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor,contadorD.valor)