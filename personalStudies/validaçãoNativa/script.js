const nome = document.querySelector('#nome')
const nota = document.querySelector("#nota")
const p_msg = document.querySelector("#msg")
const btn = document.querySelector("#btn")

btn.addEventListener('click', (evt)=>{
    let estadoVali = nota.validity
    if(estadoVali.valueMissing){
        nota.setCustomValidity("Poxa, este Campo é Obrigatório")
    } else if(estadoVali.rangeOverFlow){
        nota.setCustomValidity("Nossa, que nota alta você digitou!")
    } else if(estadoVali.rangeOverUnderFlow){
    } 

    /*if(!nota.checkValidity()){
        msg = nota.validationMessage
    }*/
    //nota.reportValidity()
    p_msg.innerHTML = nota.validationMessage
    evt.preventDefault()
})


// checkValidity() Verifica os requisitos de verificação html do componente e retorna um erro se algo não for correspondido

//DOM.elementHTMl.validationMessage -> Retorna qual erro ocorreu na validação do checkValidity()


/////////////////

//DOM.elementHTMl.validity -> Retorna qual erro ocorreu.

//DOM.elementHTMl.setCustomValidity("Mensagem") -> Personaliza uma mensagem para o erro ocorrido.

//DOM.elementHTMl.reportValidity() -> Mostra a mensagem personalizada dentro da caixa de alerta html.

