function gerarSenha() {
    var comprimento = Number(document.getElementById('carc').value)
    var radsim = document.getElementById('sim')
    var radnao = document.getElementById('nao')
    var res = document.getElementById('res')
    var res1 = document.getElementById('res1')
    var copy = document.getElementById('ctrlc')

    //
    if (comprimento == 0) { //Confere antes de mais nada
        window.alert('Digite um número de Caracteres.')
    }

    //Vê o comprimento menor que 3 e maior que 50
    if (comprimento > 0 && comprimento < 3 || comprimento > 25) {
        window.alert('Coloque um número de carcteres maior que 3 e menor que 25.')

        return radsim.checked == 'off' // 
        return radnao.checked == 'off'
    }

    if (radsim.checked) {

        if (comprimento == 0) { // Impede que algo apareça se um radio for marcado mas 
        // comprimento não

            window.alert('Digite um número de Caracteres.')

        } else {
        
        // Banco de dados do radio 'Sim'
        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?'

        var senha = ''

        // Cria a senha
        for (c=0 ; c < comprimento ; c++) {
            var indice = Math.floor(Math.random() * caracteres.length)
            senha += caracteres[indice]
        }

        // texto a ser mostrado
        res1.innerText = 'Sua senha está pronta, olhe abaixo para conferir!'
        // Muda cor para azul
        res.style.color = 'blue'
        // Mostra a senha
        res.innerText = senha
        // Mostra o botão de copiar
        copy.style.display = 'inline'
        
        // Determina funcionalidade do botão copiar
        copy.addEventListener('click', () => {
    
            navigator.clipboard.writeText(senha); // Copia um texto para a area de transferencia
            
            alert('Texto copiado para área de transferência!');
          });
        
        
        }
       


    // Com o radio 'Não' marcado ___________

    } else if (radnao.checked) {
        if (comprimento == 0) { // Impede que algo apareça se um radio for marcado mas 
            // comprimento não

            window.alert('Digite um número de Caracteres.')

        } else {
            
        // Banco de dados do radio 'Não'
        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

        var senha = ''

        // Cria a senha
        for (c=0 ; c < comprimento ; c++) {
            var indice = Math.floor(Math.random() * caracteres.length)
            senha += caracteres[indice]
        }


        // texto a ser mostrado
        res1.innerText = 'Sua senha está pronta, olhe abaixo para conferir!'
        // Muda cor para azul
        res.style.color = 'red'
        // Mostra a senha
        res.innerText = senha
        // Mostra o botão de copiar
        copy.style.display = 'inline'
        
        // Determina funcionalidade do botão copiar
        copy.addEventListener('click', () => {
    
            navigator.clipboard.writeText(senha);
            
            alert('Texto copiado para área de transferência!');
          });
        
        }
        

    } else { // Se nenhum dos radios for marcado.
        window.alert('Escolha o Uso de Caracteres.') 
    }
}


