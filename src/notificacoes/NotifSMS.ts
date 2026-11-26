import type { Notificacao } from "../interfaces/Notificacao.js";

export default class NotifSMS implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`SMS: ${mensagem}`);
    }
}
