//02c_promiseChain.js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pedido atendido"), 2000);
});

promise
    .then(result => { console.log(result); return "valor"; }) // Pedido atendido
    .then(result => console.log(result)) // valor
    .catch(error => console.log(error))
;

console.log("Fim do programa"); // Fim do programa

/*
Fim do programa
Pedido atendido
valor
*/