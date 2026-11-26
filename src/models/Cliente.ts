import type Conta from "./Conta.js";

export default class Cliente {
    private nome: string;
    private cpf: string;
    private endereco: string;
    private renda: number;
    private contas: Conta[];

    constructor(nome: string, cpf: string, endereco: string, renda: number) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.renda = renda;
        this.contas = [];
    }

    public adicionarConta(conta: Conta): void {
        this.contas.push(conta);
    }

    public consultarContas(): Conta[] {
        return [...this.contas];
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public getEndereco(): string {
        return this.endereco;
    }

    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    public getRenda(): number {
        return this.renda;
    }

    public setRenda(renda: number): void {
        this.renda = renda;
    }

    public getContas(): Conta[] {
        return [...this.contas];
    }

    public setContas(contas: Conta[]): void {
        this.contas = contas;
    }
}