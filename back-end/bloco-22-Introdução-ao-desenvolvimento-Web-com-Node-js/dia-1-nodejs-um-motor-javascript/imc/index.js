const readline = require('readline-sync');
const imc = require('./imc');

const getPeso = () => readline.questionFloat('Qual seu peso?');

const getAltura = () => readline.questionFloat('Qual seu altura?');

const calculoImc = () => {
  const peso = getPeso();
  const altura = getAltura();
  const resposta = imc(peso, altura);
  const result1 =  resultadoImc(resposta);

  console.log( `Imc: ${resposta} - Resultado: ${result1}`);
} 
calculoImc();

function resultadoImc(resultado) {
  if (resultado <= 18.85 ) {
    return "Abaixo do peso (magreza)"
  } else if (resultado > 18,85 && resultado < 24.9) {
    return "Peso normal"
  } else if (resultado > 25 && resultado < 29.9) {
    return "Acima do peso (sobrepeso)"
  } else if (resultado > 30 && resultado < 34.9) {
    return "Obesidade grau I"
  } else if (resultado > 35 && resultado < 39.9) {
    return "Obesidade grau II"
  } else {
    return "Obesidade graus III e IV "
  }
}

