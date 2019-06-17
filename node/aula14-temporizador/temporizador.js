const schedule = require('node-schedule')

// levando a string a baixo na sequencia, sequencia temporizador
// */5 = de 5 em 5 segundos (caso fosse 5 iria executar apenas no segundo 5)
// * = em qualquer minuto 
// 12 = horas 
// * = qualquer dia do mes 
// * = qualquer mes 
// 2 = terça feira (0 = domingo, 1 = segunda, 2 = terça ...) 
const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 2', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

//Cancelando a tarefa no segundo 20
setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
},20000)

//criando tarefa com regra de recorrencia
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] // vai executar de segunda a sexta
regra.hour = 15
regra.second = 30 

const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})