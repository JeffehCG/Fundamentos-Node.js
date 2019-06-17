const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

//dasafio -- obter mulher chinesa com menor salario    
    const Nascchines = pessoa => pessoa.pais == 'China'
    const generoFeminino = pessoa => pessoa.genero == 'F'
    const menorSalario = function(acumulador,atual){
        if(acumulador.salario <= atual.salario){
            return acumulador
        }else {
            return atual
        }
    }
    console.log(funcionarios.filter(Nascchines).filter(generoFeminino).reduce(menorSalario))
})

