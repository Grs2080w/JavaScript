const endpoint = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='11-01-2024'&@dataFinalCotacao='11-07-2024'&$top=1&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao"
 

const obterDados = () => {
    const cotaVen = document.querySelector("#cotaVen")
    const cotaCom = document.querySelector("#cotaComp")
    const data = document.querySelector("#data")
    const btn = document.querySelector("#btn")

    fetch(endpoint, {method:'post'}) // Busca o resultado da Api 
    .then(res => res.text()) // Passa para texto
    .then(dados => {
        // Transforma em JSON
        let json = JSON.parse(dados).value[0]
        // Mostra o resultado
        console.log(json.cotacaoVenda, json.cotacaoCompra, json.dataHoraCotacao)

        btn.addEventListener('click', ()=>{
            cotaCom.innerText = 'Cotação Compra: ' + json.cotacaoCompra
            cotaVen.innerText = 'Cotação Venda: ' + json.cotacaoVenda
            data.innerText = 'Data/Hora: ' + json.dataHoraCotacao
        })

    })
}


obterDados()


// Mandando dados

let dados = {
    nome:"Gabriel Santos",
    idade:"16",
    sexo:"Masculino"
}

let cabeçalho = {
    method: "POST",
    body:JSON.stringify(dados)
}

const gravarDados = ()=>{
    const endpoint = 'https://exemplo.url'
    fetch(endpoint, cabeçalho)
    .then(res => res.JSON())
    .then(ret => {
        console.log(ret)
    })
}











