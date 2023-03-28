//03a_ObjetoDeClasse.mjs
import { UmaClasse } from "./03a_umaClasse.mjs";

let umaClasse = new UmaClasse("Primeiro atributo")

let {
    capturaPrimeiroAtributo: umAtributo, // Utilização de : para definir um nome diferente
    outroAtributo
} = umaClasse;

console.log("um Atributo: " + umAtributo);
    // um Atributo: capturaPrimeiroAtributo() { var $_$c = $_$wf(1); return $_$w(1, 1, $_$c), this.#_umAttributo; }  
console.log("Outro Atributo: " + outroAtributo);
    // Outro Atributo: atributo dois 