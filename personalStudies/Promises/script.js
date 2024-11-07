const num = document.getElementById("numero")
var btn_promise = document.getElementById('btn_promessa')

btn_promise.addEventListener("click", ()=>{

    let p = new Promise((resolve, reject)=>{
        num.innerText = 'Processando...'

        let resultado = true
        let tempo = 3000
        
        setTimeout(()=> {
            if (resultado) {
                resolve('Deu tudo Certo')
            } else {
                reject("Deu tudo errado")
            }

        }, tempo)
    })
    
    p.then(()=>{
           num.innerText = 'Deu tudo Certo'
           num.classList.remove('erro')
           num.classList.add('ok')
       })
    p.catch(()=>{
           num.innerText = "Deu tudo errado"
           num.classList.remove('ok')
           num.classList.add('erro')
       })
})

const promessa = ()=>{
    num.innerText = 'Processando...'
    let p = new Promise((resolve, reject)=>{
        let resultado = true
        let tempo = 3000
        
        setTimeout(()=> {
            if (resultado) {
                resolve('Deu tudo Certo')
            } else {
                reject("Deu tudo errado")
            }

        }, tempo)
    })

    return p
}


num.innerText = 'Esperando...'