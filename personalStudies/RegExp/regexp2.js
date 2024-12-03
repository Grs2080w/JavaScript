let nome = 'Sergio Robertooooo Rodriguesssss Santos 1979'
let email = 'Sergio_rodrigues@.com.br'
let numero = '1, 10, 100, 1000'

//metacaracteres

console.log(nome.match(/[a-z|0-9]/ig))
console.log(nome.match(/\d/g)) // numeros
console.log(nome.match(/\s/g)) // espaços
console.log(nome.match(/\bRoberto/gi)) // digitos

// Quantificadores

console.log(numero.match(/10/g))
console.log(numero.match(/10+/g))
console.log(numero.match(/10*/g))
console.log(numero.match(/10?/g))



