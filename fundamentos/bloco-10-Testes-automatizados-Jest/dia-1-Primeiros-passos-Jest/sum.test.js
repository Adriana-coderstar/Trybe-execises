const { it, expect } = require('@jest/globals');
const sum = require('./sum');
// implemente seus testes aqui

describe('sum', () => {
    it('Retorno de sum (4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    it('Retorno de sum (0, 0) é 0', () => {
      expect(sum(0, 0)).toBe(0);
    });

    it('Retorno de erro quando número é string (4, "5")', () => {
      expect(() => {
        sum (4, '5')
      }).toThrow();
    });

    it('Retorno msg de erro "parameters must be numbers"', () => {
      expect(() => {
        sum (4, '5')
      }).toThrow(/parameters must be numbers/)
    })
  });

module.exports = sum;
