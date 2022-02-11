const numbers = require('./exercicio1');

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100 + 1) 
}

const arrayNumberMath = () => {
  const randomNumbers = Array.from({length: 3}).map(getRandomNumber);
  
    numbers(...randomNumbers)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
}
arrayNumberMath();