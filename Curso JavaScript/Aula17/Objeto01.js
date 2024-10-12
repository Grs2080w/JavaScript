let amigo = {nome:'Gabriel',
idade: 16,
sexo:'Masculino',
peso: 70,
engordar(p=0){
    this.peso += p
},
emagrecer(p=0){
this.peso -= p
} }

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso} Kgs`)

amigo.emagrecer(1)

console.log(`${amigo.nome} pesa ${amigo.peso} Kgs`)


var nome = 'GABRIEL'

console.log(nome.slice(0, 5))


