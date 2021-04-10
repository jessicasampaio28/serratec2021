/*  Os "vendedores comissionados" recebem 5% do valor de cada produto
vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um
adicional de 9% sobre o excedente. Seu programa irá receber o valor total
de vendas e emitir o recibo de comissão.
Vendas totais: 5230.66
Sua comissão: 261.53
Valor adicional: 20.76  */ 

const ler=require("prompt-sync") ();

console.log("==COMISSÕES==");
//entrada
var vendas= parseFloat(ler ("Digite o total de vendas no mês:"));

//processamento
const META =5000.00;
let comissao= vendas * 0.05;
//comissao= parseFloat(comissao);
let adicional= 0.0;

if (vendas > META) { 
  adicional= (vendas - META) * 0.09;
}
//saidas
console.log("Vendas totais:", vendas);
console.log("Sua comissão: ", comissao.toFixed(2));
console.log("Valor adicional:",adicional.toFixed(2));

