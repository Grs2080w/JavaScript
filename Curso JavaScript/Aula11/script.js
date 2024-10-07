var vel = window.document.getElementById('vel')
var res = window.document.getElementById('res')
var adv = window.document.getElementById('adv')
var marc = window.document.getElementById('marc')

function verificar() {
    var vel = window.document.getElementById('vel')
    var adv = window.document.getElementById('adv')
    var v = Number(vel.value)
    var res = window.document.getElementById('res')
    var marc = window.document.getElementById('marc')

    if (v > 60) {
        marc.innerHTML = `Velocidade: ${v}Km/h`
        res.innerText = 'Status: Multado'
        adv.innerText = 'Você excedeu o limite de velocidade. Tente dirigir mais devagar!'
    }

    else {
        marc.innerHTML = `Velocidade: ${v}Km/h`
        res.innerText = 'Status: Liberado'
        adv.innerText = 'Pode prosseguir!'
    }
}