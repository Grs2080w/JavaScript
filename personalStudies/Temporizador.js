var temSeg = new Date().getSeconds()

/*c = 0
while (c != 300000) {
    console.log(c + 'segundos')
    c++
}*/

// Conta até 3 segundos, mas gasta muita memória, quase craxei o pc.

//============================================================================

var segundos = 0

setInterval(()=>{
    console.log("Já passou " + segundos +" segundos...")
    segundos++
}, 1000)

//Não tem fim...
