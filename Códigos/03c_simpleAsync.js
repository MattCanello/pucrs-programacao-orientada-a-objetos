//03c_simpleAsync.js
async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Pedido atendido"), 2000);
    });

    let resultado = await promise;
    return resultado;
}

async function main() {
    console.log("Iniciando o programa") // Iniciando o programa
    console.log(await fazAlgo()) // Pedido atendido
    console.log("Finalizando o programa") // Finalizando o programa
}

main()

/*
Iniciando o programa
Pedido atendido
Finalizando o programa 
*/