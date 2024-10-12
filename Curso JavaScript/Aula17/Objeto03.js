let pessoa = {      // Objeto chamado pessoa
	nome: 'Gabriel',
	idade: 16,           // Propiedades do objeto, ou, do Gabriel
	peso: 69.5,
	saudacao: function(){
	console.log('Olá, meu nome é ' + this.nome)
	}
	
}


pessoa.saudacao()


for (let c in pessoa) {
    console.log(c + ':' + pessoa[c])
}