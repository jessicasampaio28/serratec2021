/* o programa Musical recebe uma letra maiúscula, que representa uma nota musical, e eescreve o nome da nota na tela.
Letra: C
Nota musical: Dó
*/

const ler=require("prompt-sync") ();
var nota= ler("Digite uma letra músical: ");
var mensagem;

switch(nota){
   case "C": mensagem = "Dó" ; break;
   case "D": mensagem = "Re" ; break;
   case "E": mensagem = "Mi" ; break;
   case "F": mensagem = "Fá" ; break;
   case "G": mensagem = "Sol"; break;
   case "A": mensagem = "Lá" ; break;
   case "B": mensagem = "Si" ; break;
}
console.log( mensagem );