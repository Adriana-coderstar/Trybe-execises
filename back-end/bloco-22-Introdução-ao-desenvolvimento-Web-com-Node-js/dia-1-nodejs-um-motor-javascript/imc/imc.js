
function calculoImc(peso, alt) {
  const imc = (peso / (alt * alt)).toFixed(2);

  console.log(`Peso: ${peso} Altura ${alt}`);

  return console.log(`Imc ${imc}`);
}

console.log(calculoImc(83, 1.65));
