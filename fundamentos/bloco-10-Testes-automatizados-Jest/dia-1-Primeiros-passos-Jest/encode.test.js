const encode = require('./encode');

describe('encode', () => {
    it('Verificar se encode é uma função', () => {
        expect(typeof encode).toStrictEqual('function')
    });

    it('Verificar se a vogal "a" é convertida para número "1"',() => {
        expect(encode('ana')).toBe('1n1')
    })

    it('Verificar se a vogal "e" é convertida para número "2"',() => {
        expect(encode('ele')).toBe('2l2')
    })

    it('Verificar se a vogal "i" é convertida para número "3"',() => {
        expect(encode('indio')).toBe('3nd34')
    })

    it('Verificar se a vogal "o" é convertida para número "4"',() => {
        expect(encode('olho')).toBe('4lh4')
    })

    it('Verificar se a vogal "u" é convertida para número "5"',() => {
        expect(encode('uva')).toBe('5v1')
    })
});

module.exports = encode;
