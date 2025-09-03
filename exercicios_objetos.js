/*
===========================================================
Exercícios Práticos - Objetos
===========================================================
*/

// 1. Crie um objeto com 3 propriedades diferentes e exiba-o.

const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "Rio de Janeiro"
};
console.log(pessoa);


// 2. Acesse e exiba uma propriedade usando notação de ponto e colchetes.

console.log(pessoa.nome); // Notação de ponto
console.log(pessoa["idade"]); // Notação de colchetes

// 3. Adicione uma nova propriedade ao objeto depois de criado.

pessoa.profissao = "Engenheiro";
console.log(pessoa);

// 4. Remova uma propriedade do objeto.

delete pessoa.cidade;
console.log(pessoa);

// 5. Adicione um método que retorne uma string usando propriedades do objeto.

pessoa.saudacao = function() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
};
console.log(pessoa.saudacao());

// 6. Crie um objeto aninhado (objeto dentro de objeto) e exiba um valor interno.

const empresa = {
    nome: "Ds Cursos",
    endereco: {
        rua: "Samambaia Norte",
        numero: 25,
        cidade: "Brasília"
    },
    setor: "Tecnologia"
};
console.log(empresa.endereco.cidade);

// 7. Itere sobre as propriedades do objeto e exiba cada par nome/valor.

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}


// 8. Clone um objeto usando spread e altere uma propriedade no clone.

const pessoaClone = { ...pessoa, nome: "Iracema" };
console.log(pessoaClone);
console.log(pessoa);

// 9. Compare dois objetos com mesmo conteúdo e explique o resultado da comparação.

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

console.log(obj1 === obj2); // false

// Explicação: Mesmo que os dois objetos tenham o mesmo conteúdo, eles são referências diferentes na memória. Portanto, a comparação estrita (===) retorna false.

// 10. Congele um objeto com Object.freeze e tente alterar uma propriedade.

Object.freeze(pessoa);
pessoa.idade = 35; // Tentativa de alterar a propriedade
console.log(pessoa.idade); // Continua 30, pois o objeto está congelado

