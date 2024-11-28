const user ={
    name: 'Gabriel', 
    idade: 16,
    adress: {
        street:'Avenida 17',
        number:0,
    },
};

const { name, ...rest } = user

console.log(rest)
//return > { idade: 16, adress: { street: 'Avenida 17', number: 0 } }


/////////////////////////////////////////
    
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first, second, third, ...resto] = array

console.log(first, second)
// return > 1 2

console.log(resto)
// return > [3, 4, 5, 6, 7, 8, 9, 10]


/////////////////////////////////////////
    
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first1, , third1, ...resto1] = array1

console.log(first1, third1, resto1)
// return > 1 3 [4, 5, 6, 7, 8, 9, 10]
// Pula o número 2
