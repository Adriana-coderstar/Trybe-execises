const numbers = require('./exercicio1');

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100 + 1) 
}

const arrayNumberMath = async () => {
  const randomNumbers = Array.from({length: 3}).map(getRandomNumber);
  
  try {
    const result = await numbers(...randomNumbers)
    console.log(randomNumbers);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
arrayNumberMath();
