let nome = 'Gabriel Rodrigues SantOs'
console.log(nome)

console.log(nome.search(/santos/i)) // return 18
console.log(nome.match(/o/gi)) // return ['o','O']
console.log(nome.replace(/santos/i, 'roberto')) // return 'Gabriel Rodrigues Roberto'
console.log(nome.replace(/i/gi, 'TESTE'))