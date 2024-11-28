const array = [1, 2, 3, 4, 5];

for (const i of array) {
    //console.log(i)
}
// return 1 2 3 4 5

array.forEach(item => {
    //console.log(item)
})
// return 1 2 3 4 5

// ========================================= //

const novoArray = array.map(item => {
    return item * 2;
});

//console.log(novoArray)
// return [ 2, 4, 6, 8, 10 ]

// map sempre retorna um array com o mesmo tamanho do array orginal.

const array2 = array.map(item =>{
    if (item % 2 == 0) {
        return item * 10;
    } else {
        return item
    };
});


//console.log(array2)
// return [ 1, 20, 3, 40, 5 ]


// ===================================== //

const arra3 = array.filter(item => item % 2 == 0)

//console.log(arra3)
// return [2, 4]

const arra4 = array.filter(item => item % 2 !== 0)

//console.log(arra4)
// return [ 1, 3, 5 ]

// Filter não modifica o array, apenas vê quais valores correspondem à condição de procura

// ===================================== //

const todosItemsSaoNumeros =  array.every(item => typeof item == 'number')

//console.log(todosItemsSaoNumeros)
// return true

// Every vale apenas se a condição satisfazer à todos os elementos do array

// ===================================== //

const peloMenosUmItemNãoEUmNumero = array.some(item => typeof item !== 'number')

console.log(peloMenosUmItemNãoEUmNumero)
// return false

// Some vale se pelo menos um valor satisfazer à condição


// ===================================== //

const par = array.find(item => item % 2 == 0);
//console.log(par)
// return 2

// Find retorna o PRIMEIRO item que satisfaz à condição imposta.

// ===================================== //

const indicePar = array.findIndex(item => item % 2 == 0);

//console.log(indicePar)
// return 1

// findIndex retorna o indice do PRIMEIRO item que satisfaz à condição imposta.


// ===================================== //

const soma = array.reduce((acc, item) => {
    //console.log(acc + ',' + item
    return acc + item
}, 0)

console.log(soma)
// return 15

// Utiliza o método reduce() para somar todos os elementos de um array. O resultado final dessa soma é armazenado na constante soma.