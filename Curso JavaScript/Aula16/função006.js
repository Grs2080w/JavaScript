function par(n) {
    if (n == 0) {
        return true
    } else if (n > 0) {
        a = impar(n-1)
        return a
    }
}

function impar(n) {
    if (n == 0) {
        return false
    } else if (n > 0) {
       b = par(n-1)
        return b
    }
}

console.log(impar(3))