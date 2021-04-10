/* Vacina 
perguntar a idade, sendo 67 anos, pode vacinar hoje, 
sendo inferiror, avisar que volta semana que vem.
sendo superior, pq não vacinou ainda?
*/

const ler=require("prompt-sync") ();
console.log("--Fila da vacina COVID --");
var idade= ler ("Digite sua idade: ");

var vacinahoje= (idade == 67);
var voltar= idade <67;
var superior= idade >= 68;

if (vacinahoje) console.log ("Vacinação hoje.");
if (voltar) console.log ("Volte na proxima semana.");
if (superior) console.log ("Por quê não vacinou ainda?");

