# Sistema Bancário Digital

Este projeto foi feito para a atividade de POO. A proposta é criar um sistema simples para uma cooperativa de crédito, usando TypeScript.

**Aluno:** Matheus Augusto Rodrigues de Alencar  
**Turma:** 2º Ano A  
**Professora:** Havana Diogo Alves Andrade

## O que o sistema faz

No sistema, é possível cadastrar clientes e adicionar contas a eles. Cada cliente pode ter mais de uma conta.

As contas permitem:
- Consultar o saldo;
- Fazer depósitos;
- Fazer saques;
- Bloquear e desbloquear a conta.

Também foram criadas regras para evitar problemas durante os saques. O sistema não permite sacar valores inválidos, sacar de uma conta bloqueada, retirar mais dinheiro do que existe no saldo ou ultrapassar o limite diário. Quando acontece algum desses erros, uma exceção informa o motivo. No caso de saldo insuficiente, também é informado quanto falta.

## Interface e notificações

As notificações possuem uma interface chamada `Notificacao`, que define o método `enviar()`. As classes de SMS, e-mail e aplicativo implementam esse método. Assim, a conta pode enviar uma mensagem sem precisar conhecer os detalhes de cada tipo de notificação.

## Organização dos arquivos

- `models`: ficam as classes `Cliente` e `Conta`.
- `interfaces`: fica a interface usada pelas notificações.
- `notificacoes`: ficam as classes de SMS, e-mail e aplicativo.
- `exceptions`: ficam as exceções usadas nas operações de saque.
- `index.ts`: arquivo onde os objetos são criados e os exemplos são executados.

## Conceitos utilizados

Durante a atividade foram utilizados encapsulamento, herança, polimorfismo, associação entre cliente e conta, interface e tratamento de exceções.

## Como executar

Com o Node.js instalado, abra o terminal na pasta do projeto e execute:

```bash
npm install
npm run dev
```

Para verificar se o TypeScript compila:

```bash
npm run build
```

Repositório: https://github.com/mathzsw/sistema-banco-digital
