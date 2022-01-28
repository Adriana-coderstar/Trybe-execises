/*3 - Faça um programa que retorne o maior de três 
números. Defina no começo do programa três constantes 
com os valores que serão comparados. */

let n1 = 1
let n2 = 21
let n3 = 30

if (n1 > n2 && n1 > n3){
    console.log("O maior nº é: " + n1 + "(n1)") 
} else if (n2 > n1 && n2 > n3){
    console.log("O maior Nº é: " + n2 + "(n2)")
} else {
    console.log("o maior nº é: " + n3 + "(n3)")
}
