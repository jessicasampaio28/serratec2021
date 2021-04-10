/*exercício almoço
O Daniel precisa pagar 2 boletos em atraso diretamente no caixa do banco.
Crie uma função "guiche" que recebe o parâmetro "numero", e escreve no console o texto 
"Pagamento do Boleto <numero> recebido.
*/
const prompt=require("prompt-sync") ();
function guiche(numero,valor) {
console.log("Pagamento do Boleto", numero ,"recebido de R$",valor);
}
var boleto= prompt("Digite o numero do boleto que deseja pagar: ");
guiche(boleto,33.50);
var boleto= prompt("Digite o numero do boleto que deseja pagar: ");
guiche(boleto,109.76);

