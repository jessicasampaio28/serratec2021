// 14.	A “continha oposta” lê um número e mostra seu valor negativo.

const prompt = require ("prompt-sync")();

var possitiva = prompt ("Digite um número: ");
var negativa = (possitiva -2* possitiva);

console.log ("Continha oposta é:", negativa);
