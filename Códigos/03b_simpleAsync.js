//03b_simpleAsync.js
async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Pedido atendido"), 2000);
    });

    let resultado = await promise;
    return resultado;
}

console.log("Iniciando o programa") // Iniciando o programa
fazAlgo().then((msg) => console.log(msg)) // Pedido atendido
console.log("Finalizando o programa") // Finalizando o programa

/*
Iniciando o programa
Finalizando o programa 
Pedido atendido 
*/