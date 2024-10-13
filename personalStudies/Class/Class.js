class Pessoa{
    constructor(nome, idade, sexo){
        this.nome= nome
        this.idade = idade
        this.sexo = sexo
    }
}

let pessoa1 = new Pessoa('Gabriel', 16, 'Masculino')

//console.log(pessoa1.nome)


//-----------------------------------------------------------

class Carro {
    material = 'Metal'
    constructor(nome, tipo) {
        this.nome = nome
        if(tipo == 1) {
            this.tipo = 'Esportivo'
            this.velmax = 300
        } else if (tipo == 2) {
            this.tipo = 'Utilitario'
            this.velmax = 100
        } else if (tipo == 3) {
            this.tipo = 'Passeio'
            this.velmax = 160
        } else {
            this.tipo = 'Militar'
            this.velmax = 180
        }
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade Máxima: ${this.velmax}`)
        console.log(`Material: ${this.material}`)
        console.log('---------------------------------')
    }

    getNome(){
        return this.nome
    }

    getTipo(){
        return this.tipo
    }

    getVMax(){
        return this.velmax
    }

    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    setVelMax(velmax){
        this.velmax = velmax
    }

    getInfo(){
        return [this.nome, this.tipo, this.velmax, this.material]
    }

}



let c1 = new Carro('Rapidão', 1)
let c2 = new Carro('Super Luxo', 2)
let c3 = new Carro('Bombadão', 4)
let c4 = new Carro('Carrego tudo', 3)

//console.log(c1.nome, c1.tipo, c1.velmax)
//console.log(c2.nome)
//console.log(c3.nome)
//console.log(c4.nome)
console.log(c1.getInfo())

c1.setNome('Lucas')
c1.setVelMax(500)

console.log(c1.getInfo())