// Exercicio 10
// 1º o custo de um produto e seu valor de venda.
// 2º calcule quanto de lucro (valor de venda descontado 
// o custo do produto) a empresa terá ao vender mil desses produtos.
// 3º Atente que, sobre o custo do produto, incide um imposto de 20%.
// 4ºSeu programa também deve emitir uma mensagem de erro e encerrar 
// caso algum dos seus valores de entrada seja menor que zero
// 5ºO lucro de um produto é o resultado da subtração do valor de venda 
// pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// 6ºvalorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

let custo = 2000
let venda = 5000

if(( custo >= 0)|| ( venda >= 0)){
    let custoTotalmaisImpostos = custo *1.2
    let lucro = (venda - custoTotalmaisImpostos) * 1000
    console.log ('Total de lucro R$ '+lucro)
} else{
    console.log ("Por favor digite um valor maior do que zero")
}
