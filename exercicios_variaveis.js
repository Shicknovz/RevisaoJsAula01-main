/*
===========================================================
Exercícios Práticos - Variáveis (var, let, const)
===========================================================
*/

// 1. Declare uma variável com `var` e atribua uma string com seu nome. Exiba no console.
var nome = "Wemerson";
console.log (typeof nome);
console.log ("Meu nome é" , nome);

// 2. Declare uma variável com `let` contendo um número e depois altere esse número para outro valor.
let idade = 30;
idade = 24;
console.log ("Minha idade é", idade);

// 3. Declare uma constante `const` com um array vazio. Adicione três elementos a esse array e exiba.
const nomes = [];
nomes.push ("Wemerson");
nomes.push ("Joana");
nomes.push ("José");
console.log (nomes);

// 4. Escreva um bloco `if` que declare uma variável `var` dentro dele. Exiba essa variável fora do bloco.
if (true) {
    var x = 20;
    console.log("Dentro do bloco if, x é:", x);
}
console.log("Fora do bloco if, x é:", x); 

// 5. Escreva um bloco `if` que declare uma variável `let` dentro dele. Tente exibir essa variável fora do bloco (comente a linha que causa erro).
if (true) {
    let y = 30;
    console.log("Dentro do bloco if, y é:", y);
} 
console.log("Fora do bloco if, y é:", y);

// 6. Tente redeclarar uma variável usando `var` no mesmo escopo. Faça o mesmo com `let` e observe o erro.
var genero = "masculino";
var genero = "feminino";
console.log("Gênero com var:", genero); 

let genero = "masculino";
let genero = "feminino";
console.log("Gênero com let:", genero);

// 7. Declare uma variável com `const` que contém um objeto com duas propriedades. Altere uma dessas propriedades e exiba o objeto.
const pessoa = {
    nome: "Wemerson",
    idade: 24
};
pessoa.idade = 24
console.log("Objeto pessoa:", pessoa);

// 8. Declare uma variável com `let` sem inicializá-la. Depois atribua um valor e exiba.
let cidade;
cidade = "Brasília";
console.log("Cidade:", cidade);

// 9. Demonstre hoisting declarando uma variável com `var` depois de usá-la (exiba antes da declaração).
var linguagem = "JavaScript";
console.log("Linguagem antes da declaração:", linguagem);
var linguagem = "Python";
console.log("Linguagem depois da declaração:", linguagem);

// 10. Crie uma função que declare uma variável `var` dentro dela e tente acessar essa variável fora da função (explique o resultado).
var linguagemFunc = "JavaScript";
function mostrarLinguagem() {
    var linguagemFunc = "Python";
    console.log("Dentro da função, linguagemFunc é:", linguagemFunc);
}
mostrarLinguagem();
console.log("Fora da função, linguagemFunc é:", linguagemFunc);
 