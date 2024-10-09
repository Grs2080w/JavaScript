function verificar() {
    var anoNas = Number(document.getElementById('nas').value)
    var anoAtual = new Date().getFullYear()
    var idade = anoAtual - anoNas

    var mas = document.getElementById('mas')
    var fem = document.getElementById('fem')
    var txt = document.getElementById('txt')
    var img = document.getElementById('img')

    if (mas.checked) {

        if (idade < 0) {
            txt.innerText = `Essa pessoa ainda não Nasceu!`
        }

        else if (idade < 3) {
            img.style.backgroundImage = 'url(imagens/homem/Bebê.jpg)'
            img.style.height = "200px"
            txt.innerText = `Detectamos Bebê com ${idade} ano(s).`
        }

        else if (idade > 3 && idade <= 8){
            img.style.backgroundImage = 'url(imagens/homem/criancapequena.jpg)'
            img.style.height = "200px" 
            txt.innerText = `Detectamos uma Criança Pequena com ${idade} ano(s).`
        }

        else if (idade > 8 && idade <= 12) {
            img.style.backgroundImage = 'url(imagens/homem/Criança.jpg)'
            img.style.height = "200px" 
            txt.innerText = `Detectamos Criança com ${idade} ano(s).`
        }

        else if (idade > 12 && idade <= 18) {
            img.style.backgroundImage = 'url(imagens/homem/Adolecente.jpg)'
            img.style.height = "200px" 
            txt.innerText = `Detectamos Adolescente com ${idade} ano(s).`
        }

        else if (idade > 18 && idade <= 24) {
            img.style.backgroundImage = 'url(imagens/homem/Jovem.jpg)'
            img.style.height = "200px" 
            txt.innerText = `Detectamos Jovem com ${idade} ano(s).`
        }

        else if (idade > 24 && idade <= 40) {
            img.style.backgroundImage = 'url(imagens/homem/Adulto.jpg)'
            img.style.height = "200px" 
            txt.innerText = `Detectamos Adulto com ${idade} ano(s).`
        }

        else if (idade > 40 && idade < 60) {
            img.style.backgroundImage = 'url(imagens/homem/Coroa.jpg)'
            img.style.height = "200px" 
            txt.innerText = `Detectamos Coroa com ${idade} ano(s).`
        }

        else if (idade >= 60 && idade < 200) {
            img.style.backgroundImage = 'url(imagens/homem/Idoso.jpg)'
            img.style.height = "200px" 
            txt.innerText = `Detectamos Idoso com ${idade} ano(s).`
        }

        else if (idade >= 200 && idade < 1000){
            img.style.backgroundImage = 'url(imagens/homem/EasterEgg.jpg)'
            img.style.height = "200px"
            txt.innerText = `Detectamos Defunto com ${idade} ano(s).`
        }

        else if (idade > 1000) {
            img.style.backgroundImage = 'url(imagens/homem/EasterEgg2.webp)'
            img.style.height = "200px"
            txt.innerText = `Detectamos Vampiro com ${idade} ano(s).`
        }
        
        
    }

    else if (fem.checked) {

        if (idade < 0) {
            txt.innerText = `Essa pessoa ainda não Nasceu!`
        }
        
        else if (idade < 3) {
            img.style.backgroundImage = 'url(imagens/mulher/Bebê.jpg)'
            img.style.height = "200px"
            txt.innerText = `Detectamos Bebê com ${idade} ano(s).`
        }

        else if (idade > 3 && idade <= 8){
            img.style.backgroundImage = 'url(imagens/mulher/criancapequena.jpg)'
            img.style.height = "200px" 
            txt.innerText = `Detectamos uma Criança Pequena com ${idade} ano(s).`
        }

        else if (idade > 8 && idade <= 12) {
            img.style.backgroundImage = 'url(imagens/mulher/Criança.jpg)'
            img.style.height = "200px" 
            txt.innerText = `Detectamos Criança com ${idade} ano(s).`
        }

        else if (idade > 12 && idade <= 18) {
            img.style.backgroundImage = 'url(imagens/mulher/Adolescente.jpg)'
            img.style.height = "200px" 
            txt.innerText = `Detectamos Adolescente com ${idade} ano(s).`
        }

        else if (idade > 18 && idade <= 24) {
            img.style.backgroundImage = 'url(imagens/mulher/Jovem.jpg)'
            img.style.height = "200px" 
            txt.innerText = `Detectamos Jovem com ${idade} ano(s).`
        }

        else if (idade > 24 && idade <= 40) {
            img.style.backgroundImage = 'url(imagens/mulher/Adulta.jpg)'
            img.style.height = "200px" 
            txt.innerText = `Detectamos Adulta com ${idade} ano(s).`
        }

        else if (idade > 40 && idade < 60) {
            img.style.backgroundImage = 'url(imagens/mulher/Coroa.jpg)'
            img.style.height = "200px" 
            txt.innerText = `Detectamos Coroa com ${idade} ano(s).`
        }

        else if (idade >= 60 && idade < 200) {
<<<<<<< HEAD
            img.style.backgroundImage = 'url(imagens/mulher/velha.jpg)'
=======
            img.style.backgroundImage = 'url(imagens/mulher/idosa.jpg)'
>>>>>>> 95df0034bc0d07205410fa17689099355b9155e4
            img.style.height = "200px" 
            txt.innerText = `Detectamos Idosa com ${idade} ano(s).`
        }

        else if (idade >= 200 && idade < 1000){
            img.style.backgroundImage = 'url(imagens/mulher/EasterEgg.jpg)'
            img.style.height = "200px"
            txt.innerText = `Detectamos Defunta com ${idade} ano(s).`
        }

        else if (idade > 1000) {
            img.style.backgroundImage = 'url(imagens/mulher/EasterEgg2.jpg)'
            img.style.height = "200px"
            txt.innerText = `Detectamos Vampira com ${idade} ano(s).`
        }
        
    }

}

