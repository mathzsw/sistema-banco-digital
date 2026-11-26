export default class ErroSaque extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = "ErroSaque";
    }
}