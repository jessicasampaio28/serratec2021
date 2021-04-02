/* 24.	O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto.
Ex:
Digite seus cupons: 12
De acordo com seus cupons, você tem 12 pontos no programa de fidelidade!*/

const prompt = require ("prompt-sync") ();

console.log("Programa Fidelidade! Veja seus pontos aqui.");
var numero = prompt ("Digite seus cupons: ");
console.log("De acordo com seus cupons, você tem ", numero * 1,"pontos no programa fidelidade!:)");


