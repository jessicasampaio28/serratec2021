/* Na estatística IBGE-SERRA o serretec 
gostaria de saber o total de homens e mulheres na turma.*/

/*repetição numero de alunos: sim eu sei ===definida
na~sos ei ==indefinida
estabelecer uma forma de Parar 
for (inicilização; cindição;incremento).*/

/*for (var i=0; i<35; i++) {
    var aluno = prompt("Aluno, digite M ou F:");
    if(aluno=="F") f++;
    if(aluno=="M") m++;*/
    const prompt=require("prompt-sync") ();
    //ENTRADA

    //PROCESSAMENTO
    var m=0; 
    var f=0;
    var quantidade=prompt("Quantos alunos temos na turma?");
    quantidade=Number(quantidade);
   
    while (m < 10 && f<5) {
    var aluno = prompt("Aluno, digite M ou F:");

    if(aluno=="F") f++;
    if(aluno=="M") m++;
}
//SAIDA
console.log ("Total de homens: ", m);
console.log ("Total de mulheres: ", f);

