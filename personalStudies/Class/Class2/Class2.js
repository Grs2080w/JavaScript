class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    getNome() {
        return this.nome
    }

    getIdade(){
        return this.idade
    }

    setNome(nome){
        this.nome = nome
    }

    setIdade(idade){
        this.idade = idade
    }

    getInfo(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.Idade}`)
        console.log('------------------------')
    }
    
}

let pessoas = [] // Armazena as pessoas

const btn_add = document.querySelector('#btn') // Botao adicionar
const res = document.querySelector('#res') // div Resultado

// Função que Adiciona pessoas 
const addPessoa = () => {

    res.innerHTML = ''

    pessoas.map((p)=>{

        //Cria uma div
        const div = document.createElement('div')

        //Atribui a classe pessoa a essa div, para q seja possivel alterar com css
        div.setAttribute('class', 'pessoa')

        //Adiciona conteudo a essa div
        div.innerHTML = `Nome: ${p.getNome()} </br> idade: ${p.getIdade()}`

        //Adiciona essa div dentro do resultado.
        res.appendChild(div)
    })

    /* No site, os conteúdos mantém mesmo o conteúdo de 'res' sendo apagado toda vez que algo é adicionado. Isso ocorre porque uma div não está necessáriamente ligada ao conteúdo da div pai, podendo ser adiconada como filha, mas só vai ser apagada, se for usada o comando removeChild() */
}

btn_add.addEventListener('click', () => {
    
    //input nome
    const nome = document.querySelector('#nome')
    //input idade
    const idade = document.querySelector('#idade')
    // Cria um novo objeto da classe Pessoa()
    const q = new Pessoa(nome.value, idade.value)
    
    // Adiciona o objeto q ao array pessoas
    pessoas.push(q)

    // Apaga os valores de nome e idade
    nome.value = ''
    idade.value = ''

    // FeedBack do que acontece por trás
    console.log(pessoas)

    // Adiciona pessoa na função mais acima.
    addPessoa()

})


