console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

//dentro de uma função this não aponta para exports e sim para global
function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()