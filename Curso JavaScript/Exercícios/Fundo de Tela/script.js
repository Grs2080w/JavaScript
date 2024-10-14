var hora = document.getElementById('hora')
var minuto = document.getElementById('minutos')
var temHo = new Date().getHours()
var temMin = new Date().getMinutes()
var temSeg = new Date().getSeconds()

// Hora
var ph = document.createElement('p')
ph.setAttribute('class', 'tempo')
ph.innerText = temHo
hora.appendChild(ph)

//Minuto
var pm = document.createElement('p')
pm.setAttribute('class', 'tempo')
pm.innerText = temMin
minuto.appendChild(pm)


setTimeout(() => {
    window.location.reload()
}, (60 - temSeg) * 1000)

/* (60 - temSeg) * 1000) Diz que o tempo pra atualizar é igual 60 - os segundos atual, assim se o segundos atual for 45, 60-45 = 15 segundos para atualizar. 
Só que os segundos (temSeg) mudam automaticamente, já que está ligada a função 
Date(), ent na verdade é um temporizador, uma vez temSeg = 60, 60 - 60 = 0, então ele irá atualizar na hora exata em que trocar de minuto.

*/

var botao = document.querySelector("#btn")
botao.addEventListener('click', () => {
    if (ph.style.color == 'rgb(255, 255, 255)') {
        ph.style.color = 'rgba(255, 255, 255, 0)'
        pm.style.color = 'rgba(255, 255, 255, 0)'
    } else {
        ph.style.color = 'rgba(255, 255, 255)'
        pm.style.color = 'rgba(255, 255, 255)'
    }
})

if (temHo < 22 && temHo > 6) {
    ph.style.color = 'rgba(255, 255, 255)'
    pm.style.color = 'rgba(255, 255, 255)'
} else {
    ph.style.color = 'rgba(255, 255, 255, 0)'
    pm.style.color = 'rgba(255, 255, 255, 0)'
}



