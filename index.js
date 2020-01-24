function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return  a * b;
}

function isAdult(age) {
  if (age > 20) {
    return true;
  } else if (age >= 0 && age < 21) {
    return false;
  } else {
    return undefined;
  }
}

function isEvenNumber(number) {
  return number % 2 === 0;
}

function isOddNumber(numb) {
  return numb % 2 === 1;
}

function isPalindrome(word) {
  let result = '';
  for (let i = word.length - 1; i >= 0; i--) {
    result += word[i];
  }
  return result.toLowerCase() === word.toLowerCase();
}

function sortArrayUp(array) {
  return array.sort((a, b) => a - b);
}

module.exports = {sum, multiply, isAdult, isEvenNumber, isOddNumber, isPalindrome, sortArrayUp};
