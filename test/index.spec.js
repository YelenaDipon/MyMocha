const assert = require('assert');
const {expect} = require('chai');
const {sum, multiply, isAdult, isEvenNumber, isOddNumber, isPalindrome, sortArrayUp} = require('../index.js');
describe('function sum', () => {

    it('should variable a equal 10', () => {
        expect(sum(3, 5)).to.equal(8)
    });

    it('should function not equals 0', function () {
        assert.notEqual(sum(2, 4), 0);
    });
});
describe('function multiply', () => {
    it('should multiply correctly ', () => {
        assert.equal(multiply(3, 2), 6)
    });
});
describe('function isAdult', () => {
    it('should return true if age is over 20', function () {
        assert.equal(isAdult(31), true)
    });
});
describe('function isEvenNumber', () => {
    it('should return true for even number', function () {
        assert.equal(isEvenNumber(20), true)
    });
});
describe('function isOddNumber', () => {
    it('should return true for odd number', function () {
        assert.equal(isOddNumber(5), true)
    });
});
describe('function isPalindrome', () => {
    it('should return true if word is Palindrome', function () {
        assert.equal(isPalindrome('ogo'), true)
    });
});
describe('function sortArrayUp', () => {
    it('should return sorted array from low to high', function () {
        assert.deepEqual(sortArrayUp([2, 3, 4, 0, 1]), [0, 1, 2, 3, 4])
    });
});