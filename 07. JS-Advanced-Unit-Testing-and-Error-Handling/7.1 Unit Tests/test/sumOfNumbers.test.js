const sum = require('../src/sumOfNumbers');
const {expect} = require('chai');
const {assert} = require('chai');
describe('Sum numbers', () => {
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    });
    it('sums multiple number', () => {
        expect(sum([1,1,1])).to.equal(3);
    });
    it('sums different numbers', () => {
        expect(sum([1,2,3])).to.equal(6);
    });
    it('sums different numbers', () => {
        assert.equal(sum([1,2,3]),6);
    });
});
