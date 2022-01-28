// 2- Crie uma função que receba uma frase e retorne qual a maior palavra.

const phrases = text => {
    let arraytext = text.split(' ');
    let counter = 0;
    let result = '';
  
    for (let maiorPhrases of arraytext) {
      if (maiorPhrases.length > counter) {
        counter = maiorPhrases.length
        result = maiorPhrases
      }
  
    }
    return result
  }
  
  console.log(phrases("Você é o seu próprio obstaculo"));
  
  // com sort em uma linha.
  const phrases = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
  
  console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));