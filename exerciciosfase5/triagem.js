/* 8- A finalidade do sistema "Triagem" é ajudar o hospital a identificar os
pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do
paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas,
receberá a avaliação na tela.
Paciente: Moisés
Já vacinado: ok
[Triagem]
Sujeito a infecção? false
*/

const ler=require("prompt-sync") ();

console.log("Sistema de triagem Hospital São José:")
var nome=ler("Nome do paciente:");
var vacinado=ler("É vacinado? ");
var infecção= (vacinado!="sim");

console.log("Paciente:",nome);
console.log("Já vacinado?",vacinado);
console.log ("[Triagem]");
console.log("Sujeito a infecção?",infecção);
