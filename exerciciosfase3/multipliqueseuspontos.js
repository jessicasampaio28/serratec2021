/* 25.	O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor.
EX:
Digite seus cupons: 12
Seus cupons agora valem 36 pontos!*/

const prompt = require ("prompt-sync") ();

var numero = prompt ("Digite seus cupons: ");
console.log("Seus cupons agora valem ", numero * 3,"pontos!");


