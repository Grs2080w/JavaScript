const user ={
    name: 'Gabriel', 
    idade: 16,
    adress: {
        street:'Avenida 17',
        number:0,
    },
};

console.log('name' in user)
// return > true


/////////////////////////////////////////////////////
    
const user1 ={
    name: 'Gabriel', 
    idade: 16,
    adress: {
        street:'Avenida 17',
        number:0,
    },
};


console.log(Object.keys(user1))
// return > [ 'name', 'idade', 'adress' ]

/////////////////////////////////////////////////////

const user2 ={
    name: 'Gabriel', 
    idade: 16,
    adress: {
        street:'Avenida 17',
        number:0,
    },
};


console.log(Object.values(user2))
// return > [ 'Gabriel', 16, { street: 'Avenida 17', number: 0 } ]

/////////////////////////////////////////////////////

const user3 ={
    name: 'Gabriel', 
    idade: 16,
    adress: {
        street:'Avenida 17',
        number:0,
    },
};


console.log(JSON.stringify(Object.values(user3)))
// return > ["Gabriel",16,{"street":"Avenida 17","number":0}]

/////////////////////////////////////////////////////

const user4 ={
    name: 'Gabriel', 
    idade: 16,
    adress: {
        street:'Avenida 17',
        number:0,
    },
};


console.log(JSON.stringify(Object.entries(user4)))
// return > [["name","Gabriel"],["idade",16],["adress",{"street":"Avenida 17","number":0}]]

//  Ele transforma um objeto em um array de pares chave-valor. Cada elemento desse array é outro array, onde o primeiro elemento é a chave e o segundo é o valor correspondente.