/* 21.	Alice foi até uma loja de eletrônicos e comprou alguns jogos e 
um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 
pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de 
parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem 
juros e em 10 vezes com 1,5% de juros sobre o total da compra.*/

// soma 1.890.00
var total= 1890.00;
var juros= ((1.5/100)*total) + total;

console.log("Total da compra: ", total);
console.log("Parcelamento em 3x sem juros:",total / 3);
console.log("Parcelamento em 5x sem juros:",total / 5);
console.log("Parcelamento em 10x com 1,5% de juros:",juros/10);


