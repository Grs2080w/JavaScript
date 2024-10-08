var agora = new Date()
var hora = agora.getHours()
console.log(hora)
console.log(`Agora são extamente ${hora} horas.`)
if (hora > 0 && hora < 4) {
    console.log('Bom Madrugada!')
} else {
    if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa Tarde!')
} else if (hora > 18 && hora < 24) {
    console.log('Boa Noite')
}}

// getday -> pega o dia da semana
// getFullYear -> pega o ano
// getDate -> pega o dia do mês
// getHours -> pega a hora sem minutos
// getMilliseconds -> pega os milisegundos
// getMinutes -> pega os minutos apenas
// getMonth -> Em 07/10/2024 está pegando o mês menos 1, mas pega o mês
// getSeconds -> pega os segundos
// getTimezoneOffset -> pega a diferença em minutos da hora local para a hora no meridiano de greenwich
// getUTCDate -> pega a data no meridiano de greenwich
// getUTCDay -. pega o dia da semana