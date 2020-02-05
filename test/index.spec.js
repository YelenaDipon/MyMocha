// const assert = require('assert');

const {expect} = require('chai');
const {sum, multiply, isAdult, isEvenNumber, isOddNumber, isPalindrome, sortArrayUp,allNumbers,usCStates} = require('../index.js');
describe('function sum', () => {
  it('expecting not be undefined' , function(){
    expect(sum(5,3)).not.undefined;
  });
  it('expecting to  equal 8', () => {
    expect(sum(5,3)).equal(8);
  });
  it('expecting not equals 0', function () {
    expect(sum(5,3)).not.equal(0);
  });
  it('expecting to be typeof number' , function(){
    expect(sum(5,3)).a('number');
  });
  it('expecting to be greater than 5', () => {
    expect(sum(5,3)).gte(5);
  });
  it('expecting to be less than 10', () => {
    expect(sum(5,3)).lte(10);
  });
});
describe('function multiply', () => {
  it('expecting to not be undefined' , function(){
    expect(multiply(5,3)).not.undefined;
  });
  it('expecting to multiply correctly ', () => {
    expect(multiply(5,3)).to.equal(15);
  });
  it('expecting to be a number' , function(){
    expect(multiply(5,3)).a('number');
  });
  it('expecting to be greater than 5', () => {
    expect(multiply(5,3)).gte(5);
  });
  it('expecting to be less than 20', () => {
    expect(multiply(5,3)).lte(20);
  });
});
describe('function isAdult', () => {
  it('expecting to return true if age is over 20', function () {
    expect(isAdult(21)).to.equal(true);
  });
  it('expecting to be a boolean' , function(){
    expect(isAdult(21)).a('boolean');
  });
  it('expecting to not be undefined' , function(){
    expect(isAdult(21)).not.undefined;
  });
});
describe('function isEvenNumber', () => {
  it('expecting to return true for even number', function () {
    expect(isEvenNumber(20)).to.equal(true);
  });
  it('expecting to be a boolean' , function(){
    expect(isEvenNumber(20)).a('boolean');
  });
  it('expecting to not be undefined' , function(){
    expect(isEvenNumber(20)).not.undefined;
  });
});
describe('function isOddNumber', () => {
  it('expecting to return true for odd number', function () {
    expect(isOddNumber(23)).to.equal(true);
  });
  it('expecting to be a number' , function(){
    expect(isOddNumber(23)).a('boolean');
  });
  it('expecting to not be undefined' , function(){
    expect(isOddNumber(23)).not.undefined;
  });
});
describe('function isPalindrome', () => {
  it('expecting to return true if word is Palindrome', function () {
    expect(isPalindrome('ogo')), true;
  });
  it('expecting to be a boolean' , function(){
    expect(isPalindrome('ogo')).a('boolean');
  });
  it('expecting to not be undefined' , function(){
    expect(isPalindrome('ogo')).not.undefined;
  });
});
describe('function sortArrayUp', () => {
  it('expecting to return sorted array from low to high', function () {
    expect(sortArrayUp([2, 3, 4, 0, 1])).to.deep.equal([0, 1, 2, 3, 4]);
  });
  it('expecting to not be undefined' , function(){
    expect(sortArrayUp([2, 3, 4, 0, 1]), [0, 1, 2, 3, 4]).not.undefined;
  });
  it('expecting to be an object' , function(){
    expect(sortArrayUp([2, 3, 4, 0, 1])).a('array');
  });
  it('expecting to not include 10', function (){
    expect(sortArrayUp([2, 3, 4, 0, 1])).not.to.include(11);
  });
});
describe('function allNumbers', () => {
  it('expecting to only have numbers in a string', function () {
    expect(allNumbers('12345')).not.to.include('NaN');
  });
  it('expecting to not be undefined', function () {
    expect(allNumbers('12345')).not.be.undefined;
  });
});
describe('function USA states that begin with a letter C', function () {
  it('expecting to not be undefined',function () {
    expect(usCStates('California,Colorado,Connecticut')).not.be.undefined;
  });
  it('expecting to return true if string has 3 states that start with letter C',function () {
    expect(usCStates('California,Colorado,Connecticut')).to.equal(true);
  });
});
