const decode = require('./decode')

describe('decode',() => {
    it('Verificar se decode é uma função', () => {
        expect(typeof decode).toStrictEqual('function')
    });

    it('Verificar se a número "1" é convertido para letra "a"', () => {
        expect(decode('1n1')).toBe('ana')
    });

    it('Verificar se a número "2" é convertido para letra "e"', () => {
        expect(decode('2n2')).toBe('ene')
    });

    it('Verificar se a número "3" é convertido para letra "i"', () => {
        expect(decode('3n3')).toBe('ini')
    });

    it('Verificar se a número "4" é convertido para letra "o"', () => {
        expect(decode('4n4')).toBe('ono')
    });

    it('Verificar se a número "5" é convertido para letra "u"', () => {
        expect(decode('5n5')).toBe('unu')
    });
})

module.exports = decode;
