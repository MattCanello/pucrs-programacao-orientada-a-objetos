//01a_Array.js
let nomeCompleto = [ 'Edson', 'Ifarraguirre', 'Moreno' ];
var [primeiroNome, nomeDoMeio, ultimoNome] = nomeCompleto;

console.log("O primeiro nome é: " + primeiroNome); // O primeiro nome é: Edson
console.log("O nome do meio é: " + nomeDoMeio); // O nome do meio é: Ifarraguirre
console.log("O último nome é: " + ultimoNome); // O último nome é: Moreno

var [primeiroNome, ...restante] = nomeCompleto;
console.log("O primeiro nome é: " + primeiroNome); // O primeiro nome é: Edson
console.log("O restante do nome é: \"" + restante.join(' ') + "\""); // O restante do nome é: "Ifarraguirre Moreno"

var [soOPrimeiroNome, , soOUltimoNome] = nomeCompleto;
console.log("O primeiro nome é: " + soOPrimeiroNome); // O primeiro nome é: Edson
console.log("O último nome é: " + soOUltimoNome); // O último nome é: Moreno