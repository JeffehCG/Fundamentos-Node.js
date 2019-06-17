require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) //cuidado objetos globais podem ser alterados, se não for utilizado Freeze