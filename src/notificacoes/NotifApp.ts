import type { Notificacao } from "../interfaces/Notificacao.js";

export default class NotifApp implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Notificação no aplicativo: ${mensagem}`);
    }
}
