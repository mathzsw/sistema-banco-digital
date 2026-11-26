import ErroSaque from "./ErroSaque.js";

export default class SaldoInsuficiente extends ErroSaque {
    private valorFaltante: number;

    constructor(valorFaltante: number) {
        super(`Saldo insuficiente. Faltam R$ ${valorFaltante.toFixed(2)}.`);
        this.name = "SaldoInsuficiente";
        this.valorFaltante = valorFaltante;
    }

    getValorFaltante(): number {
        return this.valorFaltante;
    }
}