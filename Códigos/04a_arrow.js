var somar = () => console.log("função sem parâmetros")
somar()  // função sem parâmetros
somar(1) // função sem parâmetros

somar = _ => console.log("usando underscore")
somar() // usando underscore

somar = (x, y) => x + y;
console.log(somar(1, 2)); // 3

somar = (x, y) => { return x + y; };
console.log(somar(3, 4)); // 7

// retorna o maior número
somar = (x, y) => x > y ? x : y;
console.log(somar(5, 6)); // 6

somar = (x, y) => {
    if (x > y)
        return x;
    else
        return y;
};

console.log(somar(7, 8)); // 8
