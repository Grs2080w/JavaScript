let num = [4, 3, 7, 9, 1, 20, 1]

num[5] = 6 // Adiciona 6 ao indice 5.
num.push(7) // Adiciona o 7 ao último índice.
num.sort() // Ordena a lista
console.log(num.length) // retorna o número de elementos

console.log(`Nosso vetor é o ${num}`)

var pos = num.indexOf()

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}

