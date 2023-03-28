//02a_basicPromiseSucceed.js
const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Sucesso!");
    }, 2000);
});

let ifSucceed = (sucessMessage) => {
    console.log(`Finalizado! ${sucessMessage}`); // Finalizado! Sucesso!
};

myFirstPromise
    .then(ifSucceed);

console.log("Fim do programa"); // Fim do programa

/*
Fim do programa
Finalizado! Sucesso!
*/