// const assert = require('assert');
const {expect} = require('chai');
const {sum, multiply, isAdult, isEvenNumber, isOddNumber, isPalindrome, sortArrayUp} = require('../index.js');
describe('function sum', () => {
  it('expecting not be undefined' , function(){
     expect(sum).not.undefined;
     });
  it('expecting to  equal 8', () => {
    expect(sum).to.equal(8);
  });
  it('expecting not equals 0', function () {
    expect(sum).not.equal(0);
   });
  it('expecting to be typeof number' , function(){
     expect(sum).a('number')
     });
    it('expecting to be greater than 10', () => {
    expect(sum).gte(8);
  });
    it('expecting to be less than 10', () => {
    expect(sum).lte(8);
  });
});
describe('function multiply', () => {
   it('expecting to not be undefined' , function(){
     expect(multiply).not.undefined;
     });
  it('expecting to multiply correctly ', () => {
    expect(multiply.to.equal(15);
  });
    it('expecting to be a number' , function(){
     expect(multiply).a('number')
     });
     it('expecting to be greater than 10', () => {
    expect(multiply).gte(8);
  });
    it('expecting to be less than 10', () => {
    expect(multiply).lte(8);
  });
});
describe('function isAdult', () => {
  it('expecting to return true if age is over 20', function () {
    expect(isAdult.to.equal(true);
  });
     it('expecting to be a boolean' , function(){
     expect(isAdult).a('boolean')
     });
    it('expecting to not be undefined' , function(){
     expect(isAdult).not.undefined;
     });
});
describe('function isEvenNumber', () => {
  it('expecting to return true for even number', function () {
  expect(isEvenNumber(20).to.equal(true);
  });
     it('expecting to be a boolean' , function(){
     expect(isEvenNumber).a('boolean')
     });
    it('expecting to not be undefined' , function(){
     expect(isEvenNumber).not.undefined;
     });
});
describe('function isOddNumber', () => {
  it('expecting to return true for odd number', function () {
    expect(isOddNumber.to.eqaul(true);
  });
     it('expecting to be a number' , function(){
     expect(isOddNumber).a('boolean')
     });
    it('expecting to not be undefined' , function(){
     expect(isOddNumber).not.undefined;
     });
});
describe('function isPalindrome', () => {
  it('expecting to return true if word is Palindrome', function () {
    assert.equal(isPalindrome('ogo'), true);
  });
   it('expecting to be a boolean' , function(){
     expect(isPalindrome).a('boolean')
     });
  it('expecting to not be undefined' , function(){
     expect(isPalindrome).not.undefined;
     });
});
describe('function sortArrayUp', () => {
  it('expecting to return sorted array from low to high', function () {
    assert.deepEqual(sortArrayUp([2, 3, 4, 0, 1]), [0, 1, 2, 3, 4]);
  });
  it('expecting to not be undefined' , function(){
     expect(sortArrayUp).not.undefined;
     });
   it('expecting to be an object' , function(){
     expect(sortArrayUp).a('object')
     });
});
