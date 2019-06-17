const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){ // digitando node entradaESaida.js -a ira entrar como anonimo
    process.stdout.write('Fala Anonimo!\n') // process.stdout.write - escreve algo 
    process.exit() // matando o precesso
}else{ // caso não seja informado o usuario digitara o nome
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data =>{ // process.stdin.on - entrada padrão, pelo teclado (data ira pegar o valor digitado junto com enter)
        const nome = data.toString().replace('\n','') // salvando nome digirado removendo o enter do usuario('/n')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}