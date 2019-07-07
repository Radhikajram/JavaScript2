'use strict';

const myNumbers = [1, 2, 3, 4];

/* function doubleOddNumbers(numbers) {
  //   // Replace this comment and the next line with your code
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
} */

const doubleOddNumbers = myNumbers.filter(numbers => numbers % 2 !== 0).map(numbers => numbers * 2);
// eslint-disable-next-line no-unused-vars
const result = doubleOddNumbers(myNumbers);
console.log(result);

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
