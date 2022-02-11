const fs = require('fs').promises;

// 1) Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .

// 2) Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

// 3) Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const listSimpsons = async () => {
  try {
    const simpson = await fs.readFile('./simpson.js', 'utf-8');
    const arraySimpson = JSON.parse(simpson);
    const listArray = arraySimpson.filter((p) => p.id !== '10' && p.id !== '6')
      .map(({id, name}) => `${id} - ${name}`)
    console.log(listArray);
  } catch (error) {
    console.log(error);
  }
}

listSimpsons();


// 4) Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

const simpsonFamily = async () => {
  try {
    const createSimpsonFamily = await fs.readFile('./simpson.js', 'utf-8');
    const arraySimp = JSON.parse(createSimpsonFamily);
    const listSimpFamily = arraySimp.filter((p) => p.id && p.name ? p.id >= 1 && p.id <=4 : null)
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(listSimpFamily))

  } catch (error) {
    console.log(error);
  }
}
simpsonFamily();

// 5) Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

const createSimpsonNelson = async () => {
  try {
    const addSimp = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const jsonSimp = JSON.parse(addSimp);
    jsonSimp.push({'id':'5', 'name':'Nelson Muntz'})
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(jsonSimp))    
  } catch (error) {
    console.log(error);
  }
}
createSimpsonNelson();

// 6)Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

const subsSimpsonNelson = async () => {
  try {
    const addSimpMaggie = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const jsonMaggie = JSON.parse(addSimpMaggie);
    const filterSimp = jsonMaggie.filter(({id}) => id !== '5');
    const concatSimp = filterSimp.concat([{ id: '5', name: 'Maggie Simpson' }]);
    fs.writeFile('./simpsonsFamily.json', JSON.stringify(concatSimp));
  } catch (error) {
    console.log(error);
  }
}
subsSimpsonNelson();
