const readline = require('readline-sync');



function calculoImc() {
  const peso = readline.questionFloat('Qual seu peso? ');
  const altura = readline.questionFloat('Qual seu altura? ');
  
  console.log(`Peso: ${peso} - Altura ${(altura)}`);

  const imc = (peso / (altura * altura)).toFixed(2);
  
  return console.log(`Imc ${imc}`);
}

calculoImc();
