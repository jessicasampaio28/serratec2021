/* 22.	É muito comum vermos promoções em mercados e shoppings relacionadas ao valor das compras. Se a Alice fez suas compras em um shopping cuja promoção era que a cada R$ 190,00 em compras ela ganhava um cupom, quantos cupons ela ganhou?*/

// 1890 / 190 

var total= 1890.00;
var cupom= 190.00;
var cupons= total / cupom;

var resultado = Math.trunc(cupons);
console.log("Alice ganhou", resultado, "cupons.");
