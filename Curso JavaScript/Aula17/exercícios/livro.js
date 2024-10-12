var livro = {
    autor: 'Machado de Assis',
    titulo: 'Dom Casmurro',
    ano: 1899
}

livro.descricao = `O título é ${livro.titulo} e o autor é ${livro.autor}`


livro.genero = 'Realismo'

delete livro.ano



for (c in livro) {
    console.log(c + ':' + livro[c])
}