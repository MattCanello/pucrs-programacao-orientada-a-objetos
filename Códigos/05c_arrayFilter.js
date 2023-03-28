array = [ 4, 5, 6, 7, 8, 9, 10 ]

regraImpar = (item) => item % 2 != 0

console.log("Filtra números ímpares: " + array.filter(regraImpar)); 
    // Filtra números ímpares: 5,7,9

regraPrimo = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++) {
        if ((item%divisor) == 0) {
            ndiv++
        }
    }

    if (ndiv == 2) {
        return true
    } else {
        return false
    }
}

console.log("Filtar números primos: " + array.filter(regraPrimo)) 
    // Filtar números primos: 5,7

