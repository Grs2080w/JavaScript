
function somar() {
    var res = window.document.getElementById('res')
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('#txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = s
}

//AS VARIAVEIS PRECISAM ESTAR DENTRO DA FUNÇÃO.