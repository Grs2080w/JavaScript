let pessoa = {      // Objeto chamado pessoa
	nome: 'Gabriel',
	idade: 16,           // Propiedades do objeto, ou, do Gabriel
	peso: 69.5,
	dataNas: '28/2/2008',
	cidade: 'ituiutaba',
}

console.log(pessoa.cidade)

pessoa.cor = 'Pardo' // Adiciona

console.log(pessoa)
console.log(pessoa.cor)

delete pessoa.cidade // Deleta uma propiedade
console.log(pessoa)

