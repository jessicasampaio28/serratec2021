/* 11. O programa "Educado" irá perguntar o seu nome, e também como você
gostaria de ser chamado. Depois disso, uma saudação para você aparece
na tela.*/
const prompt=require("prompt-sync") ();

var nome =prompt("Qual seu nome?");
var apelido =prompt("Como gostaria de ser chamado?");

console.log("Olá", apelido,"seja bem vindo :) ");
