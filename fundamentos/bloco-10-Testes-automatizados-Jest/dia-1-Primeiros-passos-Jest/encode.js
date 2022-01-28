const encode = (phrase) => 
    phrase
    .replace(/a/g,'1')
    .replace(/e/g,'2')
    .replace(/i/g,'3')
    .replace(/o/g,'4')
    .replace(/u/g,'5')


// console.log(typeof decode)

module.exports = encode;

