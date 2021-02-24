const isSymmetric = require('../src/5.CheckForSymmetry');
const {expect} = require('chai');
describe('isSymmetric', () => {
    it('should return true with valid symmetric input', () => {
        expect(isSymmetric([1, 1])).to.be.true;
    });
    it('should return false with valid not symmetric input', () => {
        expect(isSymmetric([1, 2])).to.be.false;
    });
    it('should return false with invalid input', () => {
        expect(isSymmetric('some string')).to.be.false;
    });
    it('should return true with valid symmetric odd element input', () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    });
    it('should return true with valid symmetric string input', () => {
        expect(isSymmetric(['e', 'r', 'r', 'o', 'r', 'r', 'e'])).to.be.true;
    });
    it('should return false with valid symmetric odd string input', () => {
        expect(isSymmetric(['r', 'r', 'o', 'r', 'r', 'e'])).to.be.false;
    });
    it('should return false with valid symmetric odd string input', () => {
        expect(isSymmetric(['r', 'r', 'o', 'r', 'r', 'e'])).to.be.false;
    });
    it('should return false with valid symmetric but type coerced input', () => {
        expect(isSymmetric(['1',1])).to.be.false;
    });
});