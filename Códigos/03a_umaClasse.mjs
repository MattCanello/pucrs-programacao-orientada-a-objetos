//03a_umaClasse.mjs
export class UmaClasse {
    #_umAttributo
    outroAtributo = "atributo dois"
    constructor(n) {
        this.#_umAttributo = n
    }
    capturaPrimeiroAtributo() {
        return this.#_umAttributo
    }
}