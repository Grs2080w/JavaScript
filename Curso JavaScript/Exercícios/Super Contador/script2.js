var txt = document.getElementById("txt")
txt.innerText = 'Preparando Contagem...'

function clicar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById("fim").value)
    var passo = Number(document.getElementById("passo").value)
    var c = inicio - passo
    var txt = document.getElementById("txt")

    txt.innerText = ''

    if (inicio == 0 || fim == 0) {
        txt.innerText = 'Impossível contar, adicione o início ou fim!'
    } 
    else if (fim < inicio) {
        window.alert("O início não pode ser menor que o fim quando todos os valores são positivos")
        window.location.reload()
    }
    /*else if (fim < 0) {
        while (c >= fim + 1) {
            c += passo
            if (c == fim) {
                txt.innerText = txt.innerText + ` ${c} 👉`
            } else {
                txt.innerText = txt.innerText + ` ${c} 👉`
            }
        }
    }*/
    else if (inicio < 0 || fim < 0 || passo < 0) {
        window.alert("Nenhum dos valores pode ser menor que 0")
        window.location.reload()
    }
    else if (fim % passo != 0) {
        while (c <= fim - passo) {
            c += passo
            if (c == fim) {
                txt.innerText = txt.innerText + ` ${c} 👉`
            } else {
                txt.innerText = txt.innerText + ` ${c} 👉`
            }
        }
    }
    else {
        while (c <= fim - 1) {
            c += passo
            if (c == fim) {
                txt.innerText = txt.innerText + ` ${c} 👉`
            } else {
                txt.innerText = txt.innerText + ` ${c} 👉`
            }
        }
    }
    txt.innerText = txt.innerText + `🚩`

}



/*else if (passo > inicio) {
        window.alert("O passo não pode ser maior que o início.")
        window.location.reload()
    } */ 


