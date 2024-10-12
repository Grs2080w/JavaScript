var historico = []

function adicionar() {
    // Pega o input de numeros
    var inputNum = document.getElementById('num')
    var num = Number(document.getElementById('num').value)
    let selc = document.getElementById('hist')

    inputNum.value = '' // Apaga o campo toda vez que o botao é apertado

    if (num == 0 || num > 100) {

        window.alert('Tente adicionar um número entre 1 e 100.')

    } else if (historico.indexOf(num) != -1) {

        window.alert('Este número já foi adicionado, tente outro.')
        //window.location.reload()

    } else {

        // Adiciona ao array
    historico.push(num)

    // Cria a tag option
    var opc = document.createElement('option')

    // Numeros de itens no array
    var quant = historico.length

    // Conteudo de option
    var content = document.createTextNode(historico[quant - 1] + ' Adicionado')

    //Adiciona o conteúdo ao option
    opc.appendChild(content)

    //Adiciona option ao select
    selc.appendChild(opc)
    
    }

}


function finalizar() {

    historico.sort((a, b) => a - b)

    // Divs
    let div1 = document.getElementById('total')
    let div2 = document.getElementById('maior')
    let div3 = document.getElementById('menor')
    let div4 = document.getElementById('soma10')
    let div5 = document.getElementById('media')

    // Caso nenhum número tenha sido cadastrado
    if (historico.length == 0) {
        window.alert('Digite algum número antes de finalizar.')

    } else { // Se der td certo

        let quan = historico.length // Lê o número de elementos na lista

        let maiornu = historico[quan - 1] // Pega o último/maior número do array ordenado.

        let menornu = historico[0] // Pega o menor/primeiro número do array ordenado.

        var soma // Declara uma variável vazia

        for (c=0, soma=0 ; historico.length != c ; c += 1) { // Soma todos os numero dentro do array
            var se = Number(historico[c])
            soma += se
        }

        var soma2 = soma // Foi criada por conta de 'soma' n estar sendo reconhecida

        let media = soma2 / quan // Média

        // prints na tela

        div1.innerText = `Ao todo, temos ${quan} números cadatrados`
        div2.innerText = `O maior valor informado foi ${maiornu}`
        div3.innerText = `O menor valor informado foi ${menornu}`
        div4.innerText = `A soma de todos os valores é ${soma2}`
        div5.innerText = `A média dos valores digitados é ${media}`

    }


}