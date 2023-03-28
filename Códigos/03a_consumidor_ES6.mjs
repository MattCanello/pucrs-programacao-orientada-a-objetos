// 03a_consumidor_ES6.mjs
import { area, circunferencia as circ } from "./03a_definicao_ES6.mjs";
console.log(`Área do círculo de raio 4 é ${area(4)}`); 
    // Área do círculo de raio 4 é 50.26548245743669
console.log(`Circunferência do círculo de raio 4 é ${circ(4)}`); 
    // Circunferência do círculo de raio 4 é 25.132741228718345

import * as circulo from "./03a_definicao_ES6.mjs";
console.log(`Área do círculo de raio 2 é ${circulo.area(2)}`); 
    // Área do círculo de raio 2 é 12.566370614359172