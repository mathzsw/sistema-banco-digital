
import Cliente from "./models/Cliente.js";
import Conta from "./models/Conta.js";

import NotifSMS from "./notificacoes/NotifSMS.js";
import NotifEmail from "./notificacoes/NotifEmail.js";
import NotifApp from "./notificacoes/NotifApp.js";

import ErroSaque from "./exceptions/ErroSaque.js";
import ValorInvalido from "./exceptions/ValorInvalido.js";
import ContaBloqueada from "./exceptions/ContaBloqueada.js";
import SaldoInsuficiente from "./exceptions/SaldoInsuficiente.js";
import LimiteDiarioExcedido from "./exceptions/LimiteDiarioExcedido.js";

const cliente1 = new Cliente("João Silva", "123.456.789-00", "Recife - PE", 3500);
const cliente2 = new Cliente("Maria Santos", "987.654.321-00", "Jaboatão - PE", 5000);

const conta1 = new Conta(1001, "0001", new Date("2026-01-10"), 2000, 1000, new NotifSMS());
const conta2 = new Conta(1002, "0001", new Date("2026-02-15"), 3000, 1500, new NotifEmail());
const conta3 = new Conta(1003, "0001", new Date("2026-03-20"), 1500, 800, new NotifApp());

cliente1.adicionarConta(conta1);
cliente1.adicionarConta(conta2);
cliente2.adicionarConta(conta3);

function testarSaque(conta: Conta, valor: number): void {
    try {
        conta.sacar(valor);
    } catch (erro) {
        if (erro instanceof ValorInvalido) {
            console.log("Erro:", erro.message);
        } else if (erro instanceof ContaBloqueada) {
            console.log("Erro:", erro.message);
        } else if (erro instanceof SaldoInsuficiente) {
            console.log("Erro:", erro.message);
        } else if (erro instanceof LimiteDiarioExcedido) {
            console.log("Erro:", erro.message);
        } else if (erro instanceof ErroSaque) {
            console.log("Erro:", erro.message);
        }
    }
}

console.log("=== CLIENTES ===");
console.log(cliente1.getNome(), cliente1.consultarContas());
console.log(cliente2.getNome(), cliente2.consultarContas());

console.log("\n=== SAQUES VÁLIDOS ===");
testarSaque(conta1, 100);
testarSaque(conta2, 200);

console.log("\n=== VALORES INVÁLIDOS ===");
testarSaque(conta1, 0);
testarSaque(conta2, -50);

console.log("\n=== CONTAS BLOQUEADAS ===");
conta1.bloquear();
conta2.bloquear();
testarSaque(conta1, 100);
testarSaque(conta2, 100);
conta1.desbloquear();
conta2.desbloquear();

console.log("\n=== SALDOS INSUFICIENTES ===");
testarSaque(conta1, 5000);
testarSaque(conta2, 10000);

console.log("\n=== LIMITES DIÁRIOS EXCEDIDOS ===");
testarSaque(conta1, 950);
testarSaque(conta2, 1400);

console.log("\n=== DEPÓSITOS ===");
conta1.depositar(300);
conta2.depositar(500);
console.log("Saldo da conta 1:", conta1.consultarSaldo());
console.log("Saldo da conta 2:", conta2.consultarSaldo());

console.log("\n=== CONSULTA DE SALDOS ===");
console.log(conta1.getSaldo());
console.log(conta2.getSaldo());
console.log(conta3.getSaldo());
