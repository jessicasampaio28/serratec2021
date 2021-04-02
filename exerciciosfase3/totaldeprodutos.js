/* 15.	Um programa "Total de produtos" irá solicitar que o cliente 
digite quantos produtos irá comprar. Depois, exibe a mensagem: 
"Parabéns por comprar x produtos!", substituindo x pela quantidade.*/

const prompt = require ("prompt-sync") ();

var quantidade = prompt ("Quantos produtos você irá comprar? ");

console.log ("Parabéns por comprar ",quantidade," produtos!");



