
// Primeiro range
var altura = document.getElementById('valor1')
var res = document.getElementById("res_valor1")
res.innerText = altura.value + ' Cm' 
altura.addEventListener('input', () => {
    res.innerText = altura.value + ' Cm'
})

// Segundo range
var peso = document.getElementById('valor2')
var res2 = document.getElementById("res_valor2")
res2.innerText = peso.value + ' Kgs'
peso.addEventListener('input', () => {
    res2.innerText = peso.value + ' Kgs'})

// DIv res
var resFinal = document.getElementById('resFinal')

// botão ver resultado
var btn_res = document.getElementById('verRes')

//Var p resultado
var resCur = document.getElementById('res5')


btn_res.addEventListener('click', () => {
    resFinal.style.display = 'block'
    var imc = Number(peso.value)/ (Number(altura.value) / 100)**2

    // Verifica peso
    function veriPeso(imc) {
        if (imc < 18.5) {
            return 'Abaixo de peso.'
        } else if (imc >= 18.5 && imc < 25) {
            return 'com Peso ideal.'
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso.'
        } else {
            return 'Obesa.'
        }
    }

    // Imagem
    var img = document.getElementById('img')
    img.style.display = 'inline'
    
    //Resultado Final
    resCur.innerText = `Seu IMC é de ${imc.toFixed(2)}, portanto uma pessoa ${veriPeso(imc)}`
    resCur.style.marginTop = '10px'
    resFinal.appendChild(resCur)

})