//03a_simpleAsync.js
async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Pedido atendido"), 2000);
    });

    let resultado = await promise;
    return resultado;
}

console.log("Iniciando o programa") // Iniciando o programa
console.log(fazAlgo()) // Promise { <pending> }
console.log("Finalizando o programa") // Finalizando o programa

/*
Iniciando o programa
Promise { <pending> }
Pedido atendido 
*/