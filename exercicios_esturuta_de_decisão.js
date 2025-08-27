/*
===========================================================
Exercícios Práticos - Estruturas de Decisão (if, else, switch)
===========================================================
*/

// 1. Crie uma variável `idade` e use um `if` para exibir "Maior de idade" se idade >= 18.

let idade = 20;
if (idade >= 18) {

    console.log("Maior de idade");

} else {

    console.log("Menor de idade");
}


// 2. Crie uma variável `hora` e use `if/else` para exibir "Bom dia" se hora < 12 e "Boa tarde" caso contrário.

let hora = 10;
if (hora < 12) {
    console.log("Bom dia");
}
else {
    console.log("Boa tarde");
}


// 3. Crie uma variável `nota` e use `if/else if/else` para exibir:
// "Excelente" se nota >= 9
// "Aprovado" se nota >= 7
// "Recuperação" se nota >= 5
// "Reprovado" caso contrário

let nota = 8;
if (nota >= 9) {
    console.log("Excelente");
}
else if (nota >= 7) {
    console.log("Aprovado");
}
else if (nota >= 5) {
    console.log("Recuperação");
}
else {
    console.log("Reprovado");
}

// 4. Crie uma variável `diaSemana` (1 a 7) e use `switch/case` para exibir o nome do dia correspondente.

let diaSemana = 3;
switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}

// 5. Modifique o exercício anterior para usar `default` caso o valor da variável não seja de 1 a 7.

{
    defaultx:
        console.log("Dia inválido");
}

// 6. Crie uma variável `cor` e use `switch/case` para agrupar cores primárias (vermelho, azul, verde) e secundárias (amarelo, roxo, laranja).

let cor = "vermelho";
switch (cor) {
    case "vermelho":
    case "azul":
    case "verde":
        console.log("Cor primária");
        break;
    case "amarelo":
    case "roxo":
    case "laranja":
        console.log("Cor secundária");
        break;
    default:
        console.log("Cor desconhecida");
}


// 7. Crie um `if` que verifique se um número é positivo, negativo ou zero, e exiba a mensagem correspondente.

let numero = -5;
if (numero > 0) {
    console.log("Número positivo");
}
else if (numero < 0) {
    console.log("Número negativo");
}
else {
    console.log("Número é zero");
}

// 8. Crie um `if/else` que verifica se um usuário pode acessar um sistema com base em idade >= 18.

let idadeUsuario = 16;
if (idadeUsuario >= 18) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

// 9. Crie um `switch` que exiba uma mensagem diferente para cada mês do ano (1 a 12), usando `default` para valor inválido.

let mes = 5;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido");
}

// 10. Crie um `if/else if/else` que classifica a velocidade de um veículo:
// <= 40 km/h → "Devagar"
// <= 80 km/h → "Moderado"
// <= 120 km/h → "Rápido"
// > 120 km/h → "Muito rápido"

let velocidade = 90;
if (velocidade <= 40) {
    console.log("Devagar");
}
else if (velocidade <= 80) {
    console.log("Moderado");
}
else if (velocidade <= 120) {
    console.log("Rápido");
}
else {
    console.log("Muito rápido");
}

// 11. Crie uma variável booleana `isAdmin` e use `if/else` para exibir se o usuário tem acesso ou não.

let isAdmin = true;
if (isAdmin) {
    console.log("Acesso concedido");
}
else {
    console.log("Acesso negado");
}

// 12. Crie uma variável `temperatura` e use `switch` para exibir:
// "Frio" se 0, 1, 2
// "Agradável" se 3, 4, 5
// "Quente" se 6, 7, 8
// "Desconhecido" para outros valores

let temperatura = 4;
switch (temperatura) {
    case 0:
    case 1:
    case 2:
        console.log("Frio");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Agradável");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Quente");
        break;
    default:
        console.log("Desconhecido");
}

// 13. Crie um `if` que verifica se um número é par ou ímpar.

let num = 7;
if (num % 2 === 0) {
    console.log("Número par");
}
else {
    console.log("Número ímpar");
}

// 14. Crie um `switch` para exibir a estação do ano com base em um número de 1 a 4.

let estacao = 2;
switch (estacao) {
    case 1:
        console.log("Primavera");
        break;
    case 2:
        console.log("Verão");
        break;
    case 3:
        console.log("Outono");
        break;
    case 4:
        console.log("Inverno");
        break;
    default:
        console.log("Estação inválida");
}

// 15. Crie um `if/else if/else` para classificar idade de uma pessoa:
// 0-12 → Criança
// 13-19 → Adolescente
// 20-59 → Adulto
// 60+ → Idoso

let idadePessoa = 25;
if (idadePessoa >= 0 && idadePessoa <= 12) {
    console.log("Criança");
}
else if (idadePessoa >= 13 && idadePessoa <= 19) {
    console.log("Adolescente");
}
else if (idadePessoa >= 20 && idadePessoa <= 59) {
    console.log("Adulto");
}
else {
    console.log("Idoso");
}

// 16. Crie uma variável `saldo` e use `if` para verificar se é positivo, negativo ou zero.

let saldo = 0;
if (saldo > 0) {
    console.log("Saldo positivo");
}
else if (saldo < 0) {
    console.log("Saldo negativo");
}
else {
    console.log("Saldo zero");
}

// 17. Crie uma variável `letra` e use `switch` para verificar se é vogal ou consoante.

let letra = 'a';
switch (letra.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vogal");
        break;
    default:
        console.log("Consoante");
}

// 18. Crie um `if/else` que verifica se um número está dentro de um intervalo (10 a 20).

let numeroIntervalo = 15;
if (numeroIntervalo >= 10 && numeroIntervalo <= 20) {
    console.log("Número dentro do intervalo");
}
else {
    console.log("Número fora do intervalo");
}

// 19. Crie um `switch` para exibir mensagens diferentes para valores 1, 2, 3 e default.

let valor = 2;
switch (valor) {
    case 1:
        console.log("Valor é um");
        break;
    case 2:
        console.log("Valor é dois");
        break;
    case 3:
        console.log("Valor é três");
        break;
    default:
        console.log("Valor desconhecido");
}

// 20. Crie um `if` que verifica se um ano é bissexto (divisível por 4, mas não por 100, exceto se divisível por 400).

let ano = 2020;
if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log("Ano bissexto");
}
else {
    console.log("Ano não é bissexto");
}

// 21. Crie um `if/else` que verifica se uma string contém pelo menos 5 caracteres.

let str = "Hello";
if (str.length >= 5) {
    console.log("String contém pelo menos 5 caracteres");
}
else {
    console.log("String contém menos de 5 caracteres");
}

// 22. Crie uma variável `nota1` e `nota2` e use `if/else` para exibir se a média é maior ou igual a 7.

let nota1 = 6;
let nota2 = 8;
let media = (nota1 + nota2) / 2;
if (media >= 7) {
    console.log("Média maior ou igual a 7");
}
else {
    console.log("Média menor que 7");
}

// 23. Crie um `switch` que exiba o tipo de triângulo com base em um número de 1 a 3 (1: Equilátero, 2: Isósceles, 3: Escaleno).

let tipoTriangulo = 2;
switch (tipoTriangulo) {
    case 1:
        console.log("Triângulo Equilátero");
        break;
    case 2:
        console.log("Triângulo Isósceles");
        break;
    case 3:
        console.log("Triângulo Escaleno");
        break;
    default:
        console.log("Tipo de triângulo inválido");
}

// 24. Crie um `if/else` que verifica se uma variável `senha` corresponde à senha correta.

let senha = "12345";
let senhaCorreta = "12345";
if (senha === senhaCorreta) {
    console.log("Senha correta");
}
else {
    console.log("Senha incorreta");
}

// 25. Crie um `switch` que exiba a quantidade de dias do mês baseado em uma variável `mes` (1 a 12).

let mesDias = 2;
switch (mesDias) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 dias");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 dias");
        break;
    case 2:
        console.log("28 ou 29 dias");
        break;
    default:
        console.log("Mês inválido");
}

// 26. Crie um `if/else` que verifica se um número é múltiplo de 3, de 5, ou de ambos.

let numeroMultiplo = 15;
if (numeroMultiplo % 3 === 0 && numeroMultiplo % 5 === 0) {
    console.log("Múltiplo de 3 e 5");
}
else if (numeroMultiplo % 3 === 0) {
    console.log("Múltiplo de 3");
}
else if (numeroMultiplo % 5 === 0) {
    console.log("Múltiplo de 5");
}
else {
    console.log("Não é múltiplo de 3 ou 5");
}

// 27. Crie um `switch` que retorna "Sim" para caso 1 e 2, "Não" para caso 3 e 4, e "Talvez" para outros.

let caso = 3;
switch (caso) {
    case 1:
    case 2:
        console.log("Sim");
        break;
    case 3:
    case 4:
        console.log("Não");
        break;
    default:
        console.log("Talvez");
}

// 28. Crie um `if` que verifica se uma variável `temperatura` está em uma faixa entre 18 e 25 graus.

let temp = 22;
if (temp >= 18 && temp <= 25) {
    console.log("Temperatura agradável");
}
else {
    console.log("Temperatura fora da faixa agradável");
}

// 29. Crie um `switch` que agrupe vários casos em uma mesma ação (por exemplo, cores quentes e frias).

let corTemperatura = "vermelho";
switch (corTemperatura) {
    case "vermelho":
    case "laranja":
    case "amarelo":
        console.log("Cor quente");
        break;
    case "azul":
    case "verde":
    case "roxo":
        console.log("Cor fria");
        break;
    default:
        console.log("Cor neutra");
}

// 30. Crie um `if/else` que combina duas condições (ex: idade >= 18 e isAdmin = true) para permitir ou negar acesso.

let idadeAcesso = 20;
let isAdminAcesso = false;
if (idadeAcesso >= 18 && isAdminAcesso) {
    console.log("Acesso permitido");
}
else {
    console.log("Acesso negado");
}