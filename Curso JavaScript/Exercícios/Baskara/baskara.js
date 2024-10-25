// delta = b^2-4*a*c
// (-b +- delta**0.5) / 2 * a
function verres() {
    var ca = Number(document.getElementById('CA').value)
    const cb = Number(document.getElementById("CB").value)
    const cc = Number(document.getElementById("CC").value)
    const res = document.getElementById('res')

    res.style.display = 'block'

    if (cc < 0) {var delta = cb**2 + 4*(ca*cc)} else {var delta = cb**2 - 4*(ca*cc)}
    if (delta < 0) { 
        res.innerText = `Delta deu negativo (${delta}), impossível continuar!`
    } else if (Math.sqrt(delta) == 'NaN') {
        res.innerText = `Delta igual a ${delta} e não tem raiz, impossível continuar!`
    } else {
        var x1 = (-cb + Math.sqrt(delta)) / 2*ca
        var x2 = (-cb - Math.sqrt(delta)) / 2*ca

    res.innerText = `xI= ${x1.toPrecision(3)} xII= ${x2.toPrecision(3)}`
    }
    
}