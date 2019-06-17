const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
//__dirname = diretorio atual

// sincrono... espera ler o arquivo para despachar a requisição

const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho,'utf-8',(erro,conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//transforma arquivo json em objeto altomaticamento pelo require
const config = require('./arquivo.json')
console.log(config.db)

//lendo diretorio
fs.readdir(__dirname,(erro,arquivos)=>{
    console.log('Conteudo da pasta...')
    console.log(arquivos) // retorna array arquivo com nome dos arquivos
})

