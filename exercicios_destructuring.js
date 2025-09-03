/*
===========================================================
Exercícios Práticos - Destructuring
===========================================================
*/

// 1. Usando destructuring, pegue os dois primeiros valores de um array.

const array = [10, 20, 30, 40, 50];
const [first, second] = array;
console.log(first);
console.log(second);


// 2. Use destructuring para extrair propriedades nome e idade de um objeto.

const pessoa = { nome: 'Wemerson', idade: 25, cidade: 'Brasília' };
const { nome, idade } = pessoa;
console.log(nome);
console.log(idade);

// 3. Use destructuring para extrair uma propriedade que não existe e defina um valor padrão.

const pessoa1 = { nome: 'Wemerson', idade: 25, cidade: 'Brasília' };
const { profissao = 'Desenvolvedor' } = pessoa1;
console.log(profissao);


// 4. Use destructuring aninhado para extrair propriedades de um objeto dentro de outro.

const pessoaDetalhada = {
  nome: 'Wemerson',
  idade: 25,
  endereco: {
    cidade: 'Brasília',
    estado: 'DF'
  }
};

const { endereco: { cidade, estado } } = pessoaDetalhada;
console.log(cidade);
console.log(estado);


// 5. Use rest operator para pegar os elementos restantes de um array depois de extrair alguns.

const [primeiro, segundo, ...resto] = array;
console.log(primeiro);
console.log(segundo);
console.log(resto);
console.log(resto); 


// 6. Troque os valores de duas variáveis usando destructuring.

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a); 
console.log(b);

// 7. Destructure os parâmetros de uma função que recebe um objeto com nome e idade.

function mostrarInfo({ nome, idade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}

const pessoa3 = { nome: 'Wemerson', idade: 25 };
mostrarInfo(pessoa3);

// 8. Use destructuring para extrair chaves e valores de um objeto dentro de uma função.

function exibirDetalhes({ nome, idade, cidade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);
}

const pessoa4 = { nome: 'Wemerson', idade: 25, cidade: 'Brasília' };
exibirDetalhes(pessoa4);


// 9. Extraia propriedades de um objeto e renomeie as variáveis usando destructuring.

const { nome: nomePessoa, idade: idadePessoa } = pessoa;
console.log(nomePessoa);
console.log(idadePessoa);


// 10. Use destructuring para extrair elementos de um array retornado por uma função.

function retornarArray() {
  return [1, 2, 3, 4, 5];
}

const [um, dois, tres] = retornarArray();
console.log(um);
console.log(dois);
console.log(tres);
