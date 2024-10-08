var corFundo = window.document.body //Tavles colocar ()
var txt = window.document.getElementById("txt")
var imagem = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
console.log(hora)

if (hora >= 0 && hora < 6) {
    corFundo.style.backgroundColor = '#130832'
    imagem.style.backgroundImage = 'url(imagens/madrugada.jpg)'
    txt.innerText = `Agora são ${hora} horas.`
}

else if (hora > 0 && hora < 12) {
    corFundo.style.backgroundColor = 'rgb(241, 217, 143)'
    imagem.style.backgroundImage = 'url(imagens/manha.jpg)'
    txt.innerText = `Agora são ${hora} horas.`
}
else if (hora >= 12 && hora < 18) { //tarde
    corFundo.style.backgroundColor = 'rgba(180, 121, 69, 0.917)'
    imagem.style.backgroundImage = 'url(imagens/tarde.jpg)'
    txt.innerText = `Agora são ${hora} horas.`
} 

else if (hora >= 18 && hora <= 24) { //noite
    corFundo.style.backgroundColor = 'rgb(7, 22, 80)'
    imagem.style.backgroundImage = 'url(imagens/noite.jpg)'
    txt.innerText = `Agora são ${hora} horas.`
}