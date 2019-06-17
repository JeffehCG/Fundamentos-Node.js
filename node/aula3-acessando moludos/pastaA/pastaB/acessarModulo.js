const moduloA = require('../../moduloA') //caminho relativo, cada dois pontos sai de uma pasta
console.log(moduloA.ola)

const saudacao = require('saudacao') //não precisa colocar o caminho relativo, pois ele procula na pasta node_modules
console.log(saudacao.ola)

const c = require('./pastaC')//como dentro da pasta tem um index.js não precisa colocar o nome do arquivo
console.log(c.ola2)

const http = require('http')
http.createServer((req,res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) //modulo cor do node , joga bom dia em localhost:8080