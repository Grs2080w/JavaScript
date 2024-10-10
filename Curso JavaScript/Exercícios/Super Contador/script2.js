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

    else if (passo == 0) {
        window.alert('Considerando passo = 1')
        passo = 1
    }

    else if (fim < 0 && inicio < 0) {
        window.alert("O inicio não pode ser menor que 0 quando o fim é menor que 0.")
        window.location.reload()
    }

    else if (fim < 0 && ((fim - inicio) % passo != 0)) { // Se o fim for menor que 0, ent ele adiciona mais 1, para o fim sair crt.
        while (c >= fim - passo) {
            c += passo
            txt.innerText = txt.innerText + ` ${c} 👉`
        }
    }

    else if (fim < 0) { // Se o fim for menor que 0, ent ele adiciona mais 1, para o fim sair crt.
        while (c >= fim + 1) {
            c += passo
            txt.innerText = txt.innerText + ` ${c} 👉`
        }
    }

    else if (fim % passo != 0) { /* Evita que alguns passos façam o fim passar do
        número requerido. */

        while (c <= fim - passo) {
            c += passo
            txt.innerText = txt.innerText + ` ${c} 👉`
        }
    }

    else {  // Pa normal
        while (c <= fim - 1) {
            c += passo
            txt.innerText = txt.innerText + ` ${c} 👉`
        }
    }
    txt.innerText = txt.innerText + `🚩`

}



/*else if (passo > inicio) {
        window.alert("O passo não pode ser maior que o início.")
        window.location.reload()
    } */ 

 /*else if (inicio < 0 || fim < 0 || passo < 0) {
        window.alert("Nenhum dos valores pode ser menor que 0")
        window.location.reload()
    }
*/

        
/*else if (fim < inicio) {
    window.alert("O início não pode ser menor que o fim quando todos os valores são positivos")
    window.location.reload()
}*/

/*else if (inicio != 0 || fim != 0 && passo === 0) {
        window.alert('O passo não pode ser igual a 0.')
    }*/


