import ErroSaque from "./ErroSaque.js";

export default class ValorInvalido extends ErroSaque {
    constructor() {
        super("O valor do saque deve ser maior que zero.");
        this.name = "ValorInvalido";
    }
}