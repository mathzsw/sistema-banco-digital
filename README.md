# Sistema Bancário Digital

Projeto desenvolvido em **TypeScript** para a atividade de Programação Orientada a Objetos (POO).

## Informações da atividade

- **Aluno:** Matheus Augusto Rodrigues de Alencar
- **Turma:** 2º Ano A
- **Curso:** Técnico em Desenvolvimento de Sistemas
- **Professor:** Havana Diogo Alves Andrade

## Sobre o projeto

O sistema simula operações básicas de um banco digital. Ele permite cadastrar clientes, associar contas a cada cliente e realizar operações bancárias, aplicando conceitos de Programação Orientada a Objetos.

## Funcionalidades

- Cadastro de clientes com nome, CPF, endereço e renda.
- Criação de contas com número, agência, data de abertura e saldo.
- Associação de um cliente a uma ou mais contas.
- Consulta de saldo.
- Depósito e saque.
- Bloqueio e desbloqueio de contas.
- Validação de saques, incluindo valor inválido, conta bloqueada, saldo insuficiente e limite diário.
- Envio de notificações por SMS, e-mail ou aplicativo.

## Conceitos de POO aplicados

- **Encapsulamento:** atributos protegidos por modificadores de acesso e métodos de consulta e alteração.
- **Abstração:** representação das entidades e operações essenciais do sistema.
- **Herança:** estrutura de classes para especializar comportamentos.
- **Polimorfismo:** diferentes implementações de notificação utilizando uma interface em comum.
- **Associação:** relacionamento entre clientes e suas contas.
- **Tratamento de exceções:** classes específicas para representar erros nas operações de saque.

## Tecnologias

- TypeScript
- Node.js
- npm

## Estrutura do projeto

```text
src/
├── exceptions/
│   ├── ContaBloqueada.ts
│   ├── ErroSaque.ts
│   ├── LimiteDiarioExcedido.ts
│   ├── SaldoInsuficiente.ts
│   └── ValorInvalido.ts
├── interfaces/
│   └── Notificacao.ts
├── models/
│   ├── Cliente.ts
│   └── Conta.ts
├── notificacoes/
│   ├── NotifApp.ts
│   ├── NotifEmail.ts
│   └── NotifSMS.ts
└── index.ts
```

## Como executar

É necessário ter o **Node.js** instalado.

1. Clone o repositório:
   ```bash
   git clone https://github.com/mathzsw/sistema-banco-digital.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd sistema-banco-digital
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Para verificar a compilação TypeScript:
   ```bash
   npm run build
   ```

---

**Atividade de Programação Orientada a Objetos — 2026.**
