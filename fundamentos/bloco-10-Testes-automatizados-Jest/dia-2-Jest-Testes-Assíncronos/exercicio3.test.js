const getUserName = require('./exercicio2')

// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

describe('getUserName - promise, usando async/await', () => {
    it('Verificar se retorna o user name', async () => {
        const data = await getUserName(1);
        expect(data).toEqual('Mark');
    });
});

describe('Verificar o retorno quando o id do user não existe', () => {
    it('Verificar se retorna um erro', async () => {
        try{
         await getUserName(3);
        }catch(error){
        expect(error.message).toMatch("User with 3 not found.")
        }
    })
})


module.exports = getUserName