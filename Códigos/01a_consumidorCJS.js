// 01a_consumidorCJS.js
const circulo = require('./01a_definicaoCJS.js'); // tem tanto a "area" quanto o "circunferencia"
console.log(`Área do círculo de raio 4 é ${circulo.area(4)}`);
    // Área do círculo de raio 4 é 50.26548245743669

// desestruturando o objeto e acessando a função diretamente
const { area } = require('./01a_definicaoCJS.js'); // pega a definição de "area" e aplica no contexto atual
console.log(`Área do círculo de raio 2 é ${area(2)}`); 
    // Área do círculo de raio 2 é 12.566370614359172