function gerar() {
    var num = Number(document.getElementById('num').value)
    var res0 = document.getElementById('res0')
    var res1 = document.getElementById('res1')
    var res2 = document.getElementById('res2')
    var res3 = document.getElementById('res3')
    var res4 = document.getElementById('res4')
    var res5 = document.getElementById('res5')
    var res6 = document.getElementById('res6')
    var res7 = document.getElementById('res7')
    var res8 = document.getElementById('res8')
    var res9 = document.getElementById('res9')
    var res10 = document.getElementById('res10')

    res0.innerText = `0 x ${num} = ${0*num}`
    res1.innerText = `1 x ${num} = ${1*num}`
    res2.innerText = `2 x ${num} = ${2*num}`
    res3.innerText = `3 x ${num} = ${3*num}`
    res4.innerText = `4 x ${num} = ${4*num}`
    res5.innerText = `5 x ${num} = ${5*num}`
    res6.innerText = `6 x ${num} = ${6*num}`
    res7.innerText = `7 x ${num} = ${7*num}`
    res8.innerText = `8 x ${num} = ${8*num}`
    res9.innerText = `9 x ${num} = ${9*num}`
    res10.innerText = `10 x ${num} = ${10*num}`
    

}

/* `0 x ${num} = ${0*num}`
    `1 x ${num} = ${1*num}`
    `2 x ${num} = ${2*num}`
    `3 x ${num} = ${3*num}`
    `4 x ${num} = ${4*num}`
    `5 x ${num} = ${5*num}`
    `6 x ${num} = ${6*num}`
    `7 x ${num} = ${7*num}`
    `8 x ${num} = ${8*num}`
    `9 x ${num} = ${9*num}`
    `10 x ${num} = ${10*num}`*/