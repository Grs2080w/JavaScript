const user ={
    name: 'Gabriel', 
    idade: 16,
    adress: {
        street:'Avenida 17',
        number:0,
        zip: {
            code: '8916000',
            city: 'Mineiros'
        },
        showFullAdress() {
            return 'ok'
        }
    },
};

// Adress comentado _________________________________

console.log(user.adress.street)
// return > Cannot read properties of undefined

console.log(user.adress ? user.adress.street: 'Não informado')
// return > 'Não informado'

// Adress e zip comentado ____________________________

const a = user.adress?.zip?.code ?? "Não informado"
// Se adress comentado return 'Não informado'
// Se zip comentado return 'Não informado'

console.log(a)

// função ______________________________________________

console.log(user.adress?.showFullAdress?.() ?? 'Naõ informado')
// return 'Não informado'
// O ?. vem antes dos () quando se trata de função.

