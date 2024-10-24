// Objetos Literais
/* Quando usamos obejtos literais, toda vez qe um atributo padrão da classe de qualquer um dos objetos que fazem parte, ou seja, são instâncias dessa clase, é alterado o atributos de todas as instâncias, e não apenas daquela instância. Outro fator que muda é a sintaxe, não se usa mais 'new' já que objetos literais não possuem método constructor, e ao invés de '=' usamos ':'. */

const Pessoa = {
    nome,
    idade,
    getNome:function(){
        return this.nome
    },
    getIdade:function() {
        return this.idade
    },
    setNome:function(nome) {
        this.nome = nome
    },
}

// vars do documento
var nome = document.getElementById("nome")
var idade = document.getElementById("idade")
var btn_add = document.getElementById("btn")
var res = document.querySelector("#res")


res.innerText = ''
function addPessoa() {

    //Altera o nome e idade de todos os elementos que são objetos Pessoas.
    Pessoa.nome = nome.value
    Pessoa.idade = idade.value

    //Cria um elemento novo, dessa forma varias pessoas podem ser adicionadas.
    var p = document.createElement("p")
    //Adiciona contéudo
    p.innerText = `Nome: ${Pessoa.nome} 
    Idade: ${Pessoa.idade}`
    // Adiciona um paddingzinho
    p.style.paddingBottom = '5px'
    // Adiciona esse paragrafo à div res, ou na tela
    res.appendChild(p)
}

btn_add.addEventListener('click', () => {

    //Adiciona pessoa na tela
    addPessoa()

    // Apaga a caixa de texto de  nome e idade
    nome.value = ''
    idade.value = ''
})