/* O menino, os tênis e os apitos
Observe as quatro equações abaixo, a partir das quais você pode identificar que cada figura (menino, tênis e apitos) possui um valor diferente. Seu desafio é descobrir qual é o resultado da última equação. Preste muita atenção, pois os detalhes fazem a diferença!
Dicas: Crie uma variável nomeada com cada um dos símbolos da imagem. Use comentários para transcrever a equação de cada linha, porém escreva o algoritmo em formato de solução (resolvendo a equação como se o fizesse no papel).
Faça primeiro o desafio de cabeça, depois compare com o resultado do seu algoritmo: Será que você acertou? Depois compare o resultado com seus colegas.*/

console.log("parTenis x 3 == 30");
var parTenis= 30 / 3;
console.log(parTenis);

console.log("parTenis + meninoApito + meninoApito == 20");
var meninoApito= (20-parTenis) / 2;
console.log(meninoApito);

console.log("menino + parApito + parApito == 13");
var parApito= (13 - meninoApito) / 2;
console.log(parApito);

console.log("tenis + menino X apito = ?");
var tenis=parTenis /2;
var apito= parApito /2;
var menino= meninoApito - apito;

var resultado= tenis + menino * apito;
console.log("resultado: ", resultado);

