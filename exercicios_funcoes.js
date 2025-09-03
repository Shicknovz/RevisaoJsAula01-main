/*
===========================================================
Exercícios Práticos - Funções
===========================================================
*/

// 1. Crie uma função tradicional que receba dois números e retorne a soma.

function somar(a, b) {
    return a + b;
}
console.log(somar(3, 5));

// 2. Crie uma função de seta (arrow function) que receba uma string e retorne ela em maiúsculas.

const paraMaiusculas = (str) => str.toUpperCase();
console.log(paraMaiusculas("olá mundo"));


// 3. Crie uma função que recebe um parâmetro opcional com valor padrão e retorne uma saudação.

function saudacao(nome = "Visitante") {
    return `Olá, ${nome}!`;
}
console.log(saudacao());
console.log(saudacao("Wemerson"));

// 4. Crie uma função que receba um número indefinido de argumentos e retorne a média deles.

function calcularMedia(...numeros) {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}
console.log(calcularMedia(4, 8, 15, 16, 23, 42));


// 5. Crie uma função que retorna outra função que adiciona um número fixo.

function criarAdicionador(fixo) {
    return function(numero) {
        return numero + fixo;
    };
}
const adicionarCinco = criarAdicionador(5);
console.log(adicionarCinco(10));

// 6. Escreva uma IIFE que imprima "Função autoexecutada".

(function() {
    console.log("Função autoexecutada");
})();


// 7. Crie uma função que usa `this` e explique a diferença entre função tradicional e arrow function no contexto do `this`.

const obj = {
    valor: 42,
    funcaoTradicional: function() {
        console.log(this.valor); // 'this' refere-se ao objeto 'obj'
    },
    funcaoArrow: () => {
        console.log(this.valor); // 'this' não refere-se ao objeto 'obj', mas ao contexto onde a função foi definida (geralmente o objeto global)
    }
};

obj.funcaoTradicional();
obj.funcaoArrow();

// Explicação: Em uma função tradicional, 'this' refere-se ao objeto que chamou a função. Em uma arrow function, 'this' é léxico e refere-se ao contexto onde a função foi criada.


// 8. Crie uma função que recebe um objeto e imprime seus valores usando destructuring.

function imprimirValores({ nome, idade, cidade }) {
    console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);
}
const pessoa = { nome: "Ana", idade: 28, cidade: "São Paulo" };
imprimirValores(pessoa);


// 9. Crie uma função que troca os valores de duas variáveis usando destructuring.

function trocarValores(a, b) {
    [a, b] = [b, a];
    return [a, b];
}
let x = 5, y = 10;
[x, y] = trocarValores(x, y);
console.log(`x: ${x}, y: ${y}`);

// 10. Crie uma função recursiva que calcula o fatorial de um número.

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}
console.log(fatorial(5));
console.log(fatorial(0));
console.log(fatorial(1));
