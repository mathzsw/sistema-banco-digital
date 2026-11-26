import ErroSaque from "./ErroSaque.js";

export default class ContaBloqueada extends ErroSaque {
    constructor() {
        super("A conta está bloqueada.");
        this.name = "ContaBloqueada";
    }
}