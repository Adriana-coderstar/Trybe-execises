const mediaVelocidade = (distancia, tempo) => {
  const media = (distancia / tempo).toFixed(2);
  return media;
}

module.exports = mediaVelocidade;