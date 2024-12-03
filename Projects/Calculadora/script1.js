/*setInterval(()=>{
    if (visor.style.borderRight == '2px solid white') {
        visor.style.borderRight = '0px solid white'
    } else {
        visor.style.borderRight = '2px solid white'
    }
}, 500) // Faz com que tenha uma linha piscando na calculadora.*/

var visor = document.getElementById('visor1')
var divres = document.getElementById('resultado')

//Adiciona algum número ao visor.
function addToVisor(b) {
    if (visor.value.length == 9) { // Se o visor já tiver 9 digitos, adiciona nada.
        visor.value += ''
    } else {visor.value += b}
}

function calcula() {

    if (visor.value.indexOf('A') != -1) { // Apaga do visor o resultado da var reslongo.
        visor.value = ''
    }

    var res = visor.value
    var res2 = eval(res) // Calcula
    var res3 = `${res2}` // Tranforma o resultado para string para ser analisado posteriormente.

    if (res.length > 9) {
        /* Se o resultado for maior que 9 digitos, que é o maximo da tela, o número é arredondado para 2 casas após a vírgula, e um 'Apx' de 'aproximadamente' é mostrado. */

        //var reslongo = res3.slice(0, 4) + 'Apx'
        var reslongo = res2.toPrecision(3)
        visor.value = reslongo

    } else if (res3.indexOf('.') != -1) {
        // Se o resultado não tiver ponto 
        visor.value = res2.toPrecision(3)

    } else {/* Se tiver ponto, ele limita a 2 casas depois do ponto */
        visor.value = res2.toFixed(2)
    }

    if (visor.value == res || visor.value == 'undefined') { // Apaga o visor
        visor.value = ''
    }

}

/* Por motivos de design foi colocado a função de igual e de apagar no mesmo botão, o que fez com que o código ficasse com umas linhas a mais, para que o botão =/C reconhecesse quando deveria agir da melhor forma possível.*/