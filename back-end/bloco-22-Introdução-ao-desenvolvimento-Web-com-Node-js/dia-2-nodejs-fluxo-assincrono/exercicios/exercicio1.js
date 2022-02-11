module.exports = function numbers(a, b, c) {
  return new Promise((resolve, reject) => {
    const result = (a + b * c)

    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
      return reject("Informe apenas números") ;
    } if(result < 50) {
      return reject( "Valor muito baixo");
    }
      resolve(result);
  })
}

// numbers(5, 5, 5)
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error));

// numbers('a', 'a', 'a')
// .then((resolve) => console.log(resolve))
// .catch((error) => console.log(error));

// numbers('10', '10', 'a')
// .then((resolve) => console.log(resolve))
// .catch((error) => console.log(error));

// numbers(20, 20, 20)
// .then((resolve) => console.log(resolve))
// .catch((error) => console.log(error));

