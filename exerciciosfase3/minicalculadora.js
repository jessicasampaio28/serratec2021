/* 16.	Crie o programa “mini calculadora”, 
que após ler dois números inteiros apresenta as operações de soma, 
subtração, multiplicação e divisão com eles.*/

const prompt = require ("prompt-sync")();

//var numeroA =parseInt(prompt("Digite um número:"));
//var numeroB =parseInt(prompt("Digite outro número:"));

var numeroA =Number(prompt("Digite um número:"));
var numeroB =Number(prompt("Digite outro número:"));

var soma= numeroA+numeroB;
var subtracao= numeroA-numeroB;
var multiplicacao= numeroA*numeroB;
var divisao= numeroA/numeroB;

console.log("Resultado da soma: ",soma);
console.log("Resultado da subtração: ",subtracao);
console.log("Resulatdo da multiplicação:",multiplicacao);
console.log("Resultado da divisão: ",divisao);





