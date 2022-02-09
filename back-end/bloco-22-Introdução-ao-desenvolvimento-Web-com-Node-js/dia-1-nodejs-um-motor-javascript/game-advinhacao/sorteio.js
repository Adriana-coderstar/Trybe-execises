const sorteio = () => {
  const numeroAleatorio = Math.random();
  const result = parseInt(numeroAleatorio * 10);
  return result;
}

module.exports = sorteio;