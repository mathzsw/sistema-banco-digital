import ErroSaque from "./ErroSaque.js";

export default class LimiteDiarioExcedido extends ErroSaque {
    constructor() {
        super("O limite diário de saques foi excedido.");
        this.name = "LimiteDiarioExcedido";
    }
}