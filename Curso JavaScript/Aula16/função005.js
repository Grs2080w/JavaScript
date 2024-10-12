function fatorial(x) { // RECURSIVA
    if (x == 1) {
        return 1
    } else {
        return x * fatorial(x-1) 
    }
}

console.log(fatorial(5))

/*

fatorial 6
 fatorial 5 * 6
 (fatorial 4 * 5) * 6
 ((fatorial 3 * 4) * 5) * 6
 (((fatorial 2 * 3) * 4) * 5) * 6
 ((((fatorial 1 * 2) * 3) * 4) * 5) * 6
 (((((fatorial 0 * 1) * 2) * 3) * 4) * 5) * 6
 (((((1 * 1) * 2) * 3) * 4) * 5) * 6
 ((((1 * 2) * 3) * 4) * 5) * 6
 (((2 * 3) * 4) * 5) * 6
 ((6 * 4) * 5) * 6
 (24 * 5) * 6
 120 * 6
 720


*/
