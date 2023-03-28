array = [ 4, 5, 6, 7, 8, 9, 10 ]

array.forEach((nro) => console.log(nro + " -> " + (nro % 2 == 0 ? "par" : "ímpar")))
/*
4 -> par 
5 -> ímpar 
6 -> par 
7 -> ímpar 
8 -> par 
9 -> ímpar 
10 -> par 
*/

nroDivisores = (item) => {
    let ndiv = 0;

    for (let divisor = 1; divisor <= item; divisor++) {
        if ((item % divisor) == 0) {
            ndiv++;
        }
    }

    return ndiv;
}

array.forEach((nro) => console.log(nro + `-> nDivisores de 1 até ${nro} = ` + nroDivisores(nro)));

/*
4-> nDivisores de 1 até 4 = 3 
5-> nDivisores de 1 até 5 = 2 
6-> nDivisores de 1 até 6 = 4 
7-> nDivisores de 1 até 7 = 2 
8-> nDivisores de 1 até 8 = 4 
9-> nDivisores de 1 até 9 = 3 
10-> nDivisores de 1 até 10 = 4 
*/