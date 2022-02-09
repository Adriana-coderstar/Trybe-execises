const readline = require('readline-sync');
const sorteio = require('./sorteio');

const getNumero = () => readline.questionInt("Digite um número de 0 á 10 para o sorteio:")

const jogarNovamente = () => readline.question("Deseja jogar novamente s ou n?");

const sorteioDosNumeros = () => {
  const numero = getNumero();
  const resultSorteio = sorteio(numero);

  if (resultSorteio === numero) {
    return console.log("Parabéns, número correto!");
  } else {
    console.log(`Opa, não foi dessa vez. O número sorteado foi ${resultSorteio}`)
  }
  repetirJogo();
}

const repetirJogo = () => {
  const jogar = jogarNovamente()
  if(jogar !== 's') return console.log("Até a proxima");
  sorteioDosNumeros();
}
sorteioDosNumeros();




