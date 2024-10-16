setInterval(()=>{
    if (visor.style.borderRight == '2px solid white') {
        visor.style.borderRight = '0px solid white'
    } else {
        visor.style.borderRight = '2px solid white'
    }
}, 500)

function limpaVisor(){
    visor.innerText = ''
}

var visor = document.getElementById('visor1')
var divres = document.getElementById('resultado')

function addToVisor(b) {
    visor.innerText += b
}  

function calcula() {
    
    var res = visor.innerText
    var res2 = eval(res)
    var res3 = `${res2}`
    if (res3.indexOf('.') == -1) {
        visor.innerText = res2
    } else {
        visor.innerText = res2.toFixed(2)
    } // Ver arredondamento para float
    
    if (visor.innerText == '' || visor.innerText == res ) {
        visor.innerText = ''
    }

}









