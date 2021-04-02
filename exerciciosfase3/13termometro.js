/* 13. O programa “termômetro” lê uma temperatura em graus Celsius, 
e devolve sua equivalência na escala Fahrenheit.*/

const prompt = require ("prompt-sync")();

var celsius = prompt ("Digite uma temperatura em graus Celsius:");
var fahr = (celsius * 9) / 5 + 32;

console.log ("A temperatura de "+celsius,"°C convertida em Fahrenheit é", fahr,"°F.");


