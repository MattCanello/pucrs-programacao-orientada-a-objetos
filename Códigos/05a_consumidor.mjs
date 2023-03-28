// 05a_consumidor.mjs
import { Carro } from './05a_carro.mjs'

var carro = new Carro(55)

/* Quando se implementa getters e setters, o consumo se parece como se estivesse acessando um atributo */

console.log(carro.capacidade)   // 55
console.log(carro.tanque)       // 0

carro.tanque = 30
console.log(carro.tanque)       // 30

carro.tanque = 30
console.log(carro.tanque)       // 55

carro.tanque = 30
console.log(carro.tanque)       // 55