var pais = window.document.getElementById('pais')
var div = window.document.getElementById('viv')

function verificar() {
    var pais = document.getElementById('pais')
    var div = document.getElementById('viv')

    if (pais.value == 'brasil' || 'Brasil') {
        div.style.background = "aquamarine"
        div.innerText = 'Brasileiro raiz né? Sua Nacionalidade é Brasileira.'
    }
    else {
        div.style.background = "aquamarine"
        div.innerText = `Você nasceu no(a) ${pais.value}. Sua Nacionalidade é estrangeira!`
    }
    
}