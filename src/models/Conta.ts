
import type { Notificacao } from "../interfaces/Notificacao.js";
import ValorInvalido from "../exceptions/ValorInvalido.js";
import ContaBloqueada from "../exceptions/ContaBloqueada.js";
import SaldoInsuficiente from "../exceptions/SaldoInsuficiente.js";
import LimiteDiarioExcedido from "../exceptions/LimiteDiarioExcedido.js";

export default class Conta {
    private numero: number;
    private agencia: string;
    private dataAbertura: Date;
    private saldo: number;
    private bloqueada: boolean;
    private limiteDiario: number;
    private totalSaquesDia: number;
    private notificacao: Notificacao;
    private dataUltimoSaque: string;

    constructor(
        numero: number,
        agencia: string,
        dataAbertura: Date,
        saldo: number,
        limiteDiario: number,
        notificacao: Notificacao
    ) {
        this.numero = numero;
        this.agencia = agencia;
        this.dataAbertura = dataAbertura;
        this.saldo = saldo;
        this.limiteDiario = limiteDiario;
        this.bloqueada = false;
        this.totalSaquesDia = 0;
        this.notificacao = notificacao;
        this.dataUltimoSaque = new Date().toDateString();
    }

    public sacar(valor: number): void {
        try {
            if (valor <= 0 || !Number.isFinite(valor)) {
                throw new ValorInvalido();
            }

            if (this.bloqueada) {
                throw new ContaBloqueada();
            }

            if (valor > this.saldo) {
                throw new SaldoInsuficiente(valor - this.saldo);
            }

            const hoje = new Date().toDateString();

            if (hoje !== this.dataUltimoSaque) {
                this.totalSaquesDia = 0;
                this.dataUltimoSaque = hoje;
            }

            if (this.totalSaquesDia + valor > this.limiteDiario) {
                throw new LimiteDiarioExcedido();
            }

            this.saldo -= valor;
            this.totalSaquesDia += valor;

            this.notificacao.enviar(
                `Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`
            );

        } catch (erro) {
            this.notificacao.enviar((erro as Error).message);
            throw erro;
        }
    }

    public depositar(valor: number): void {
        if (valor <= 0 || !Number.isFinite(valor)) {
            throw new Error("O depósito deve ser maior que zero.");
        }

        this.saldo += valor;
    }

    public consultarSaldo(): number {
        return this.saldo;
    }

    public bloquear(): void {
        this.bloqueada = true;
    }

    public desbloquear(): void {
        this.bloqueada = false;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getAgencia(): string {
        return this.agencia;
    }

    public setAgencia(agencia: string): void {
        this.agencia = agencia;
    }

    public getDataAbertura(): Date {
        return this.dataAbertura;
    }

    public setDataAbertura(dataAbertura: Date): void {
        this.dataAbertura = dataAbertura;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public setSaldo(saldo: number): void {
        this.saldo = saldo;
    }

    public getBloqueada(): boolean {
        return this.bloqueada;
    }

    public setBloqueada(bloqueada: boolean): void {
        this.bloqueada = bloqueada;
    }

    public getLimiteDiario(): number {
        return this.limiteDiario;
    }

    public setLimiteDiario(limiteDiario: number): void {
        this.limiteDiario = limiteDiario;
    }

    public getTotalSaquesDia(): number {
        return this.totalSaquesDia;
    }

    public setTotalSaquesDia(totalSaquesDia: number): void {
        this.totalSaquesDia = totalSaquesDia;
    }

    public getNotificacao(): Notificacao {
        return this.notificacao;
    }

    public getDataUltimoSaque(): string {
        return this.dataUltimoSaque;
    }
}
