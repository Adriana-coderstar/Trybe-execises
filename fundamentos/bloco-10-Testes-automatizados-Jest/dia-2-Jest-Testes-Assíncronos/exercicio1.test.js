const uppercase = require('./exercicio1')

// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

test('Verificar se upperCase irá transforma em letras maiuscula', (done) =>{
    uppercase('vida',(str) => {
        try{
            expect(str).toBe('VIDA');
            done();
        }catch(error){
            done(Error);
        }
    }, 500);
});



module.exports = uppercase

