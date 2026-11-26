import type { Notificacao } from "../interfaces/Notificacao.js";

export default class NotifEmail implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`E-mail: ${mensagem}`);
    }
}
