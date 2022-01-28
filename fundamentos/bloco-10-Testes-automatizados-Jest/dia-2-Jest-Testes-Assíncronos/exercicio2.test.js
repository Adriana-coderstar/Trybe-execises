const getUserName = require('./exercicio2.js');

// 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

describe('getUserName - promise', () => {
    expect.assertions(1);

    it('Verificar se retorna o user name', () => (
        getUserName(1).then((data) => expect(data).toEqual('Mark'))
      ));
   
  
    describe('Verificar o retorno quando o id do user não existe', () => {
        expect.assertions(1);

        it('Verificar se retorna um erro', () => { getUserName(3)
            .catch ((error) => { expect(error.message).toMatch("User with 3 not found.");
            });
        });
    });
});


module.exports = getUserName
