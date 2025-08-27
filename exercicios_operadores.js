/*
===========================================================
Exercícios Práticos - Operadores em JavaScript
===========================================================
*/

// 1. Declare duas variáveis numéricas e exiba a soma usando o operador `+`.

let num1 = 5;
let num2 = 10;
console.log("Soma:", num1 + num2);

// 2. Declare duas variáveis numéricas e exiba a subtração usando o operador `-`.

let num3 = 15;
let num4 = 7;
console.log("Subtração:", num3 - num4);


// 3. Declare duas variáveis numéricas e exiba a multiplicação usando o operador `*`.

let num5 = 4;
let num6 = 6;
console.log("Multiplicação:", num5 * num6);

// 4. Declare duas variáveis numéricas e exiba a divisão usando o operador `/`.

let num7 = 20;
let num8 = 5;
console.log("Divisão:", num7 / num8);


// 5. Declare duas variáveis numéricas e exiba o resto da divisão usando `%`.

let num9 = 17;
let num10 = 5;
console.log("Módulo:", num9 % num10);


// 6. Use o operador de exponenciação `**` para calcular 2 elevado a 5.

let base = 2;
let expoente = 5;
console.log("Exponenciação:", base ** expoente);

// 7. Crie uma variável e use o operador `+=` para somar um valor a ela.

let x = 5
x += 2
console.log("Resultado final de x:", x);

// 8. Crie uma variável e use o operador `-=` para subtrair um valor dela.

let x1 = 5
x -= 2
console.log("Resultado final de x:", x);

// 9. Crie uma variável e use o operador `*=` para multiplicar seu valor por outro.

let x2 = 5
x *= 2
console.log("Resultado final de x:", x);

// 10. Crie uma variável e use o operador `/=` para dividir seu valor por outro.

let x3 = 5
x /= 2
console.log("Resultado final de x:", x);

// 11. Declare duas variáveis e use o operador `==` para comparar seus valores.

console.log(5 == "5");

// 12. Declare duas variáveis e use o operador `===` para comparar valor e tipo.

console.log(5 === "5");

// 13. Declare duas variáveis e use o operador `!=` para verificar se são diferentes (valores).

console.log(5 != "5");

// 14. Declare duas variáveis e use o operador `!==` para verificar se são diferentes (valor e tipo).

console.log(5 !== "5");

// 15. Compare se uma variável é maior que outra usando `>`.

console.log(5 > 3);

// 16. Compare se uma variável é menor que outra usando `<`.

console.log(5 < 3);

// 17. Compare se uma variável é maior ou igual a outra usando `>=`.

console.log(5 >= 3);

// 18. Compare se uma variável é menor ou igual a outra usando `<=`.

console.log(5 <= 3);

// 19. Crie uma expressão com `&&` que só retorne verdadeiro se duas condições forem verdadeiras.

console.log(true && true);

// 20. Crie uma expressão com `||` que retorne verdadeiro se pelo menos uma condição for verdadeira.

console.log(true || false);

// 21. Use o operador `!` para inverter o valor booleano de uma variável.

let meuBooleano = true;
let outroBooleano = false;

console.log(!meuBooleano);
console.log(!outroBooleano);

// 22. Use o operador ternário `condicao ? valor1 : valor2` para verificar se um número é par ou ímpar.

let numero = 3;
let resultado = (numero % 2 === 0) ? "Par" : "Ímpar";

console.log("O número é:", resultado);

let numero1 = 4;
let resultado1 = (numero1 % 2 === 0) ? "Par" : "Ímpar";

console.log("O número é:", resultado1);

// 23. Use o operador `typeof` para verificar o tipo de uma variável string.

let minhaString = "Olá, mundo!";

console.log(typeof minhaString);

// 24. Use o operador `typeof` para verificar o tipo de uma variável número.

let meuNumero = 42;

console.log(typeof meuNumero);

// 25. Use o operador `typeof` para verificar o tipo de uma variável booleana.

let meuBooleano1 = true;

console.log(typeof meuBooleano1);


// 26. Crie um objeto e use o operador `delete` para remover uma de suas propriedades.

let carro = {
    marca: "Hyundai",
    modelo: "Creta",
    ano: 2025
};

delete carro.ano;
console.log(carro);


// 27. Use o operador `in` para verificar se uma propriedade existe em um objeto.
let carro1 = {
    marca: "Hyundai",
    modelo: "Creta",
    ano: 2025
};

delete carro.ano;
console.log("marca" in carro);


// 28. Use o operador `instanceof` para verificar se um objeto é instância de uma função construtora.
let data = new Date();

console.log(data instanceof Date);

// 29. Crie uma operação com `??` para definir um valor padrão caso a variável seja `null` ou `undefined`.
let valor = null;
let valorPadrao = valor ?? "Valor padrão";

console.log(valorPadrao); 

// 30. Combine operadores aritméticos, lógicos e de comparação em uma expressão complexa e exiba o resultado.
let a = 90;
let b = 55;
let c = 42;
let resultadoFinal = (a + b > c) && (b - a < c) ? "Condições atendidas" : "Condições não atendidas";

console.log(resultadoFinal);


