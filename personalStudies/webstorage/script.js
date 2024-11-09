btn = document.getElementById('btn')
text = document.getElementById("text")


let json = {
    nome:'Gabriel',
    idade:16,
    sexo:'M'
}
json = JSON.stringify(json)
var jsonTemp = sessionStorage.getItem('Informações')
var JSON = JSON.parse(jsonTemp)


localStorage.setItem("numero", 5) // Define ou altera uma chave
localStorage.setItem("nome", "Gabriel")
localStorage.setItem("Curso", 'JavaScript')
localStorage.setItem('Informações', json)

localStorage.key('1') // Retorna a o nome da chave que está na posição requerida
alert(localStorage.length) // Retorna o tamanho do local storage.

localStorage.clear() // Limpa as chaves e os valores

/////////////////////////////////////////////////////////////////////



sessionStorage.setItem("numero", 5) // Define ou altera uma chave
sessionStorage.setItem("nome", "Gabriel")
sessionStorage.setItem("Curso", 'JavaScript')
sessionStorage.setItem('Informações', json)
sessionStorage.setItem('teste', 'oi')
sessionStorage.clear()



console.log(JSON)

