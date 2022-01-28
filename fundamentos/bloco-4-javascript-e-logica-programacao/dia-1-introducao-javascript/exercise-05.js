// 5 - Faça um programa que defina três constantes com
// os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos 
// de um triângulo e false , caso contrário. Se algum 
// ângulo for inválido o programa deve retornar uma 
// mensagem de erro.Para os ângulos serem de um triângulo 
// válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um 
// valor positivo.

let n1 = 0
let n2 = 65
let n3 = 100
let soma = n1 + n2 +n3
let anguloTotal = n1 > 0 && n2 > 0 && n3 > 0
if (anguloTotal) {
    if (soma == 180){
    console.log(true)
    }else{
    console.log (false)}
}else{
    console.log("Error, valor invalido")
}