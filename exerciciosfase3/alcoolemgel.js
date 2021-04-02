/* 26.	O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame.*/

const prompt = require ("prompt-sync")();

var garrafa = prompt ("Digite a capacidade da garrafa em mililitros:");
var alcool= garrafa *0.70;
var gel=garrafa *0.30;

console.log ("Para um vasilhame de",garrafa,"mililitros, utilize as seguintes quantidades:");
console.log ("Alcool: ",alcool,"ml");
console.log ("Gel: ",gel,"ml");
