/*const somaDoisNumeros = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

somaDoisNumeros(10 ,5)
    .then(soma => {console.log(soma)})
    .catch(err => {
    console.log(err)
})*/


// ==================================== // 

/*fetch('https://api.github.com/users/Grs2080w')
    .then(res => {return res.json()})  // text() e json() também são uma Promise
    .then(body => {console.log(body)})
    .catch(err => {console.log(err)})
    .finally(() => {console.log('DEU')})*/
        
    


// Finaly é executado sempre que uma promise chegar ao fim, independente se deu certo ou errado



// ==================================== // 

async function buscaDadosNoGitHub() {
    try {
        const res = await fetch('https://api.github.com/users/Grs2080w');
        const body = await res.json();

        //console,console.log((body));
        return body.name

    } catch(err) {
        console.log(err.message);
    } finally {
        //console.log('Deu');
    }
}

// Toda função assincrona retorna uma promise

const name = buscaDadosNoGitHub()
    .then(name => console.log(name))
