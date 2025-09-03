/*
===========================================================
Exercícios Práticos - Par Nome/Valor
===========================================================
*/

// 1. Declare uma variável string e exiba seu valor no console.

const minhaString = "Olá, mundo!";
console.log(minhaString);

// 2. Crie um objeto com pelo menos 3 pares nome/valor e exiba uma das propriedades.

const meuObjeto = {
    nome: "Wemerson",
    idade: 24,
    cidade: "Brasília"
};
console.log(meuObjeto.nome);

// 3. Crie um array com 5 elementos e exiba o terceiro elemento.

const meuArray = [10, 20, 30, 40, 50];
console.log(meuArray[2]);

// 4. Crie um objeto e adicione uma nova propriedade dinamicamente.

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};
carro.cor = "Prata";   
console.log(carro);

// 5. Mostre como acessar um valor de um objeto usando colchetes e uma variável.

const propriedade = "modelo";
console.log(carro[propriedade]);

// 6. Crie uma função que recebe um objeto e exibe as chaves e valores (usando for...in).

function exibirChavesValores(obj) {
    for (let chave in obj) {
        console.log(`${chave}: ${obj[chave]}`);
    }
}
exibirChavesValores(carro);

// 7. Declare um objeto aninhado (objeto dentro de objeto) e exiba um valor profundo.

const pessoa = {
    nome: "Michelle",
    endereco: {
        rua: "Samambaia Norte",
        numero: 402,
        cidade: "Brasília"
    }
};
console.log(pessoa.endereco.cidade);

// 8. Crie um array e mostre que o índice é o nome e o valor é o conteúdo.

const frutas = ["Maçã", "Banana", "Laranja"];
frutas.forEach((fruta, indice) => {
    console.log(`Índice: ${indice}, Valor: ${fruta}`);
});

// 9. Crie uma variável com escopo global e outra local dentro de função e mostre seus valores.

let globalVar = "Eu sou global";

function escopo() {
    let localVar = "Eu sou local";
    console.log(localVar); // Acessível aqui
}
escopo();
console.log(globalVar); 

// 10. Modifique o valor de uma propriedade de um objeto e exiba antes e depois.

console.log("Antes:", carro.ano);
carro.ano = 2021;
console.log("Depois:", carro.ano);

