function gerarSenha() {
    var comprimento = Number(document.getElementById('carc').value)
    var radsim = document.getElementById('sim')
    var radnao = document.getElementById('nao')
    var res = document.getElementById('res')
    var res1 = document.getElementById('res1')
    var copy = document.getElementById('ctrlc')

    //
    if (comprimento == 0) {
        window.alert('Digite um número de Caracteres.')
    }

    //Vê o comprimento menor que 3 e maior que 50
    if (comprimento > 0 && comprimento < 3 || comprimento > 50) {
        window.alert('Coloque um número de carcteres maior que 3 e menor que 50.')

        return radsim.checked == 'off'
        return radnao.checked == 'off'
    }

    if (radsim.checked) {
       

        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?'

        var senha = ''

        for (c=0 ; c < comprimento ; c++) {
            var indice = Math.floor(Math.random() * caracteres.length)
            senha += caracteres[indice]
        }


        res.style.color = 'blue'

        res1.innerText = 'Sua senha está pronta, olhe abaixo para conferir!'

        res.innerText = senha

        copy.style.display = 'inline'

        copy.addEventListener('click', () => {
    
            navigator.clipboard.writeText(senha);
            
            alert('Texto copiado para área de transferência!');
          });


    } else if (radnao.checked) {
        
        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

        var senha = ''

        for (c=0 ; c < comprimento ; c++) {
            var indice = Math.floor(Math.random() * caracteres.length)
            senha += caracteres[indice]
        }


        res.style.color = 'red'

        res1.innerText = 'Sua senha está pronta, olhe abaixo para conferir!'

        res.innerText = senha

        copy.style.display = 'inline'

        copy.addEventListener('click', () => {
    
            navigator.clipboard.writeText(senha);
            
            alert('Texto copiado para área de transferência!');
          });


    } else {
        window.alert('Escolha o Uso de Caracteres.')
    }
}


