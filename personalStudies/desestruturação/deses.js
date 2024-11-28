const user ={
    name: 'Gabriel', 
    idade: 16,
    adress: {
        street:'Avenida 17',
        number:0,
    },
};

// const adress = user.adress
const {adress, idade} = user
console.log(adress)
// return > { street: 'Avenida 17', number: 0 } 

console.log(idade)
// return > 16

/////////////////////////////////////////////////////

const user2 ={
    name1: 'Gabriel', 
    idade1: 16,
    adress1: {
        street:'Avenida 17',
        number:0,
    },
};


const {adress1, idade1: age} = user2

console.log(age)
// return > 16

/////////////////////////////////////////////////////

const user3 ={
    name3: 'Gabriel',
    idade3: 16,
    adress3: {
        street:'Avenida 17',
        number:0,
    },
};


const {nickname = 'Santos'} = user3
console.log(nickname)
// return > Santos

//////////////
    
const user4 ={
    name4: 'Gabriel',
    idade4: 16,
    nickname4: "rodrigues",
    adress4: {
        street:'Avenida 17',
        number:0,
    },
};


const {nickname4 = 'Santos'} = user4
console.log(nickname4)
// return > Rodrigues


/////////////////////////////////////////////////////

const cidade = {
    localizacao: "Goias",
    regiao: "Centro-oeste",
    tamaho: "60 mil habitantes",
    bairros: {
        aeroporto: "Centro",
        betel: "periferia",
    }
}

function mostraIdade({bairros}){
    return bairros;
}

console.log(mostraIdade(cidade))
// return > { aeroporto: 'Centro', betel: 'periferia' }

