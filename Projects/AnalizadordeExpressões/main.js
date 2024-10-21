var e = '5+1'

// Retorna um Number da soma
function soma(x) {
    var l = x.lastIndexOf('+')
    var v1 = x.slice(0, l)
    var v2 = x.slice(l + 1, x.length)
    if (v1.indexOf('+') != -1) {v1 = soma(v1)}
    if (v2.indexOf('+') != -1) {v2 = soma(v2)}
    return Number(v1) + Number(v2)
}

soma('5+1')

// Retorna um number da divisão
function dividir(x) {
    var l = x.indexOf('/')
    var v1 = x.slice(0, l)
    var v2 = x.slice(l + 1, x.length)
    if (v1.indexOf('/') != -1) {v1 = dividir(v1)}
    if (v2.indexOf('/') != -1) {v2 = dividir(v2)}
    return v1 / v2
}

dividir('15/3')

// Retorna um number da multiplicação
function multiplicar(x) {
    var l = x.indexOf('*')
    var v1 = x.slice(0, l)
    var v2 = x.slice(l + 1, x.length)
    if (v1.indexOf('*') != -1) {v1 = multiplicar(v1)}
    if (v2.indexOf('*') != -1) {v2 = multiplicar(v2)}
    return v1 * v2
}

multiplicar('5*2')
// Retorna um number da subtração
function subtracão(x) {
    var l = x.lastIndexOf('-')
    var v1 = x.slice(0, l)
    var v2 = x.slice(l + 1, x.length)
    if (v1.indexOf('-') != -1) {v1 = subtracão(v1)}
    if (v2.indexOf('-') != -1) {v2 = subtracão(v2)}
    return Number(v1) - Number(v2)
}

subtracão('7-5')

// Retorna o number do produto de uma potência escrita de duas formas diferentes ('**', '^').
function potencia(x) {
    if (x.indexOf('*') != -1) {
        var l = x.indexOf('*')
        var v1 = Number(x.slice(0, l))
        var v2 = Number(x.slice(l + 2, x.length))
    } else {
        var l = x.indexOf('^')
        var v1 = Number(x.slice(0, l))
        var v2 = Number(x.slice(l + 1, x.length))
    }
    
    return v1 ** v2
}

potencia('5^2')
/* Retorna o number de: n + n%, n- n%, n*n%, ou n/n%(Sendo que na divisao a porcentagem considerada é a porcentagem do primeiro valor, e não o número divido por 100.)*/
function porce(x) {
    if (x.indexOf('+') != -1) {
        var l = x.indexOf('+')
        var v1 = Number(x.slice(0, l))
        var v2 = Number(x.slice(l + 1, x.length - 1))
        var rp = (v2 / 100) * v1
        return v1 + rp
    } else if (x.indexOf('-') != -1) {
        var l = x.indexOf('-')
        var v1 = Number(x.slice(0, l))
        var v2 = Number(x.slice(l + 1, x.length - 1))
        var rp = (v2 / 100) * v1
        return v1 - rp
    } else if(x.indexOf('*') != -1) {
        var l = x.indexOf('*')
        var v1 = Number(x.slice(0, l))
        var v2 = Number(x.slice(l + 1, x.length - 1))
        var rp = (v2 / 100) * v1
        return rp
    } else if (x.indexOf('/') != -1) {
        var l = x.indexOf('/')
        var v1 = Number(x.slice(0, l))
        var v2 = Number(x.slice(l + 1, x.length - 1))
        var rp = (v2 / 100) * v1
        return v1 / rp
    }
}

porce('5-5%')

var re2
function calcSimples(v) {
    
    if (v.indexOf('+') != -1) {
        re2 = soma(v)
    } else if (v.indexOf('-') != -1) {
        re2 = subtracão(v)
    } else if (v.indexOf('*') != -1) {
        re2 = multiplicar(v)
    } else if (v.indexOf('/') != -1) {
        re2 = dividir(v)
    } else if (v.indexOf('^') != -1) {
        re2 = potencia(v) }


    return re2
}

/* Função Recursiva específica para calcula(), no qual recebe uma expressão algébrica em string com parenteses, e retorna outra string sem os parenteses e com seus conteúdos, resolvidos. */
function tiraParen(t) {
    if (t.indexOf('(') == -1) {
        return t
    } else {
        var L = t.indexOf('(')
        var L2 = t.indexOf(')')
        var v = t.slice(L + 1, L2)
        var re

        calcSimples(v)
        re = re2

        if (L == 0 || t[L-1] == '+' || t[L-1] == '-' || t[L-1] == '/' || t[L-1] == '*') {
            var r = t.replace(t.slice(L, L2 + 1), `${re}`)
        } else {
            var r = t.replace(t.slice(L, L2 + 1), `*${re}`)
        }

        return tiraParen(r)
    }
    
}


function calc2(x) {
    if (x.indexOf('+') == -1) {
        return x
    } else {

        var l, l2, re, v, v1, v2, v3
        if (x.indexOf('/') != -1) {
            l = x.indexOf('/')
            var c = 1
            while (x[l-c] != '+') {
                v += x[l-c]
                c++
                re = v.slice(9, v.length + 1)
                v1 = re.split('')
                v1.reverse()
                v1 = v1.join("")
            }

            while (x[l+c] != '-') {
                v += x[l+c]
                c++
                re = v.slice(9, v.length + 1)
                v2 = re.split('')
                v2.reverse()
                v2 = v2.join("")
            }

        }
    }

    return v2
}


function calc2(x) {
    if (x.indexOf('/') == -1 && x.indexOf('*') == -1 && x.indexOf('+') == -1 && x.indexOf('-') == -1) {
        return x

    } else {

        var tf2 = new Array
        var v = x.split("")
        var re

        temdivi = v.lastIndexOf('/')
        temmult = v.lastIndexOf('*')
        temmais = v.indexOf('+')
        temmenos = v.indexOf('-')

        var t = [[v.lastIndexOf('/')], [v.lastIndexOf('*')], [v.lastIndexOf('+')], [v.indexOf('-')]]
        var tf = [[v.includes('/')], [v.includes('*')], [v.includes('+')], [v.includes('-')], [v.includes('-')]]

        for (c=0 ; c <= 3 ; c++) {
            if (tf[c] == 'true') {
                var g = []
                g.push(t[c])
                tf2.push(t[c])
            } else {
                tf2.push()
            }
        }


        //console.log(tf2)

        //tf2 = tf2.split('')
        tf2.sort((a, b) => a - b)

        //console.log(tf2)

        //console.log(x)

        if (temdivi != -1){

            var c = 0
            while (Number(tf2[c]) != temdivi) {
                var posd = c + 1
                c++
            } 

            //console.log(x + ' a')
            
            //console.log(posd)

            var v1, v2, v3

            if (tf2.length == 1) {
                v3 = dividir(x)
                re = v3

            } else if (posd == 0) {
                v1 = x.slice(0, temdivi)
                v2 = x.slice(temdivi+1, tf2[1])
                v3 = v1 / v2
                re = x.replace(x.slice(0 , tf2[1]), v3)

            } else if (posd > 0 && posd <= tf2.length - 2) {
                v1 = x.slice(parseInt(tf2[posd - 1]) + 1, temdivi)
                v2 = x.slice(temdivi+1, tf2[posd + 1])
                v3 = v1 / v2
                re = x.replace(x.slice(parseInt(tf2[posd - 1]) + 1 , tf2[posd + 1]), v3)

            } else if (posd == tf2.length - 1){
                v1 = x.slice(parseInt(tf2[posd - 1]) + 1 , temdivi)
                v2 = x.slice(temdivi+1, x.length + 1)
                if (v1.indexOf('/') != -1) {v1 = dividir(v1)}
                v3 = v1 / v2
                re = x.replace(x.slice(parseInt(tf2[posd - 1]) + 1 , x.length + 1), v3)
            }


        } else if (temmult != -1){

            var c = 0
            do {
                var posm = c
                c++
            } while (Number(tf2[c]) == temmult)

            var v1, v2, v3

            if (tf2.length == 1) {
                v3 = multiplicar(x)
                re = v3

            } else if (posm == 0) {
                v1 = x.slice(parseInt(tf2[posm - 1])+1, temmult)
                v2 = x.slice(temmult+1, tf2[1])
                console.log(v1)
                v3 = v1 * v2
                re = x.replace(x.slice(0 , tf2[1]), v3)

            } else if (posm > 0 && posm <= tf2.length - 2) {
                v1 = x.slice(parseInt(tf2[posm - 1])+1, temmult)
                v2 = x.slice(temmult+1, tf2[posm + 1])
                v3 = multiplicar(x.slice(parseInt(tf2[posm - 1])+1, tf2[posm + 1]))
                re = x.replace(x.slice(parseInt(tf2[posm - 1])+1 , tf2[posm + 1]), v3)

            } else if (posm == tf2.length - 1){
                v1 = x.slice(parseInt(tf2[posm - 1]) + 1 , temmult)
                v2 = x.slice(temmult+1, x.length + 1)
                if (v1.indexOf('*') != -1) {v1 = multiplicar(v1)}
                v3 = v1 * v2
                re = x.replace(x.slice(parseInt(tf2[posm - 1]) + 1 , x.length + 1), v3)

            }


        } else if (temmais != -1){

            //console.log('Entrou no mais ----------------------------')

            var c = 0
            do {
                var posma = c
                c++
            } while (Number(tf2[c]) == temmais)
            var v1, v2, v3


            //console.log(tf2)

            if (tf2.length == 1) {
                v3 = soma(x)
                re = v3

            } else if (posma == 0) {
                v1 = x.slice(0, temmais)
                v2 = x.slice(temmais+1, tf2[1])
                v3 = soma(x.slice(0, tf2[1]))
                re = x.replace(x.slice(0 , tf2[1]), v3)

            } else if (posma > 0 && posm < tf2.length - 2) {
                v1 = x.slice(tf2[posma - 1], temmais)
                v2 = x.slice(temmais+1, tf2[posma + 1])
                v3 = soma(tf2[posma - 1] , tf2[posma + 1])
                re = x.replace(x.slice(tf2[posma - 1] , tf2[posma + 1]), v3)

            } else if (posma == tf2.length - 1){
                v1 = x.slice(parseInt(tf2[posma - 1]) + 1 , temmais)
                v2 = x.slice(temmais+1, x.length + 1)
                v3 = soma(x.slice(parseInt(tf2[posma - 1]) + 1 , x.length + 1))
                re = x.replace(x.slice(parseInt(tf2[posma - 1]) + 1 , x.length + 1), v3)

            }


            
        } else if (temmenos != -1){

            //console.log('Entrou no menos -----------------------------')

            var c = 0
    
            do {
                var posme = c
                c++
            } while (Number(tf2[c]) <= temmenos)
            var v1, v2, v3


            if (tf2.length == 1) {
                v3 = subtracão(x)
                re = v3

            } else if (posme == 0) {
                v1 = x.slice(0, temmenos)
                v2 = x.slice(temmenos+1, tf2[1])
                v3 = subtracão(x.slice(0, tf2[1]))
                re = x.replace(x.slice(0 , tf2[1]), v3)

            } else if (posme > 0 && posme <= tf2.length - 2) {
                v1 = x.slice(tf2[posme - 1], temmenos)
                v2 = x.slice(temmenos+1, tf2[posme + 1])
                v3 = subtracão(tf2[posme - 1] , tf2[posme + 1])
                re = x.replace(x.slice(tf2[posme - 1] , tf2[posme + 1]), v3)

            } else if (posme == tf2.length - 1){
                v1 = x.slice(parseInt(tf2[posme - 1]) + 1 , temmenos)
                console.log(x)
                v2 = x.slice(temmenos+1, x.length + 1)
                v3 = subtracão(x.slice(parseInt(tf2[posme - 1]) + 1 , x.length + 1))
                re = x.replace(x.slice(parseInt(tf2[posme - 1]) + 1 , x.length + 1), v3)
                

            }

            //console.log('Saiu do menos ----------------------------')

        } 
        re = `${re}`
        return calc2(re)
        
    }


}   


////////////////////////////////////////////////////////////////////////////////////////////

var expre = '5+6(4^9)*2/3' // = 1.048.581
var expre2 = '(5+8)+(4-9)'
var expre3 = '(10-9)/(5+4)+(4*1)' // = 1/9+4
var expre4 = '5+6(4^9)*2/3+10' // = 1.048.590,9   943.731,9
var expre5 = '5+1'

//console.log(tiraParen(expre3))
console.log(calcula(expre4)) // Resolver expre 3, e 4

function calcula(x) {
    var r, final
    var t = tiraParen(x)
    r = t
    var x = calc2(r)
    final = x

    return final
}

/* Criar funções que resolvam um tipo de operação de cada vez, até chegar no resultado final. */