const jsonTeste = {
    time: {
        nome: 'Corinthians', 
        estadio: 'Neo Quimica Arena',
        presidente: 'Augusto Melo',
        jogadoresPrincipais: {
            jogador1: {
                nome: 'Memphis Depay',
                idade: 30,
                altura: 178,
                pais: 'Dennis Depay, Cora Schensema',
                posição: 'Meia'
            },
            jogador2: {
                nome: 'Rodrigo Garro',
                idade: 35,
                altura: 182,
                pais: 'Sergio Garro, Mara Garro',
                posição: 'Atacante'
            }
        }
    }
}

//console.log(jsonTeste.time.jogadoresPrincipais)
var jsonString = JSON.stringify(jsonTeste) // Passa um json para string
var jsonStringtoJSON = JSON.parse(jsonString) // Passa a string de um obejot para 'json'
console.log(jsonStringtoJSON)


