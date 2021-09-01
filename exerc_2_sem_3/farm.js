// EXERCICIO: 
/* Farmacia JS está em promoção. A cada 2 produtos iguais comprados, receba 5 reais de desconto. 
Escreva um programa para auxiliar a farmacia a calcular o valor final do produto. */

//se produto for igual 2x - 5 reais do valor do produto


 let prod = prompt('Informe o primeiro produto:');
 let produto = prod.toLocaleLowerCase();
 let qtd_prod = Number(prompt('Informe a quantidade do primeiro produto:'));
 let v_prod = Number(prompt('Valor do primeiro produto: '));


 let prod2 = prompt('Informe o segundo produto:');
 let produto2 = prod2.toLocaleLowerCase();
 let qtd_prod2 = Number(prompt('Informe a quantidade do segundo produto:'));
 let v_prod2 = Number(prompt('Valor do segundo produto: '));



 let valor_produto1 = (qtd_prod * v_prod);
 let  valor_produto2 = (qtd_prod2 * v_prod2);
 
 
  if(qtd_prod >= 2 && produto === prod2){

    total1 = valor_produto1 - 5
    
}else{
    alert(`Valor total do primeiro produto é: ${valor_produto1.toFixed(2)}`);
}
if (qtd_prod2 >= 2 && prod2 === produto){

    total2 = valor_produto2 - 5

}else{
    alert(`Valor total do segundo produto é: ${valor_produto2.toFixed(2)}`)
}
valor_total = (valor_produto1 + valor_produto2);
alert(`Valor total da sua compra sem desconto: $${valor_total.toFixed(2)}`);
valor_final = (total1 + total2);
alert(`Parabéns, você ganhou um desconto de $${valor_final.toFixed(2)}`);