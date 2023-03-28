// 05a_carro.mjs
export class Carro {
    #_tanque // "#" significa atributo privado
    #_capacidadeDoTanque // O "_" é apenas convenção

    constructor(valor) {
        this.#_tanque = 0;
        this.#_capacidadeDoTanque = valor;
    }

    get tanque() { // getter
        return this.#_tanque;
    }

    get capacidade() { // O nome do getter/setter não precisa ser o mesmo do atributo
        return this.#_capacidadeDoTanque;
    }
    
    // Comportamento de "abastecimento" (qtde soma com o que já tem em #_tanque)
    set tanque(qtde) { // setter
        if (qtde >= 0) {
            if (qtde + this.#_tanque > this.#_capacidadeDoTanque) {
                this.#_tanque = this.#_capacidadeDoTanque;
            } else {
                this.#_tanque += qtde;
            }
        }
    }
}