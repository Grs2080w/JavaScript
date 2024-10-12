// Algoritmo de Euclides

function euclides(a, b){
    if (a == b) {
        return a
    } else if(b > a) {
        return euclides(a, b-a)
    } 
    else if (a > b) {
        return euclides(b, a-b)
        
    }
}

console.log(euclides(100, 200))

