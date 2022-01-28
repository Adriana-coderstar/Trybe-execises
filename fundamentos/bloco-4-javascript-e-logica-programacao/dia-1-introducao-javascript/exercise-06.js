// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
// let chessPiece = "Peão"

switch (chessPiece.toLocaleLowerCase()){
    case "peão": console.log("Peão-> movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo")
      break
    case "torre": console.log("Torre-> movimenta-se pela vertical ou horizontal, mas não pode pular outras peças")
      break
    case "cavalo": console.log("Cavalo-> pode pular as outras, o movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa")
      break
    case "rei": console.log("Rei-> move-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez")
      break
    case "rainha": console.log("Rainha-> A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças")
      break
    case "bispo": console.log("Bispo-> Diagonal")
      break
    default:
        console.log("Peça invalida")
}