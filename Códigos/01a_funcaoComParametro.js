function potencia(base, expoente = 2) {
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++) {
        resultado *= base;
    }

    return resultado;
}

console.log(potencia()); // NaN
console.log(potencia(4)); // 16
console.log(potencia(2, 6)); // 64
console.log(potencia(2, 6, 18)); // 64