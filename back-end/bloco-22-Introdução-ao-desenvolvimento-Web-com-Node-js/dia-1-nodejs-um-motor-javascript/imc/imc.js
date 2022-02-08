const imc = (peso, altura) => {
 const resultado = (peso / (altura * altura)).toFixed(2);
  return resultado;
} 

module.exports = imc;