const {expect} = require('chai');
const {dum} = require('../src/modules/app');
const foo=dum();
describe('Sum function', () => {
    it('should sum numbers', () => {
        expect(dum(1, 2)).to.equal(3);
    });
});