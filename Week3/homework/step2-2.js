'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [startIndex, stopIndex];

  // Replace this comment and the next line with your code
  for (const i of numbers) {
    if (typeof threeCallback !== 'undefined' && i % 3 === 0) {
      console.log(threeCallback(i));
    }
    if (typeof fiveCallback !== 'undefined' && i % 5 === 0) {
      console.log(fiveCallback(i));
    }
  }
}
function sayThree(number) {
  // Replace this comment and the next line with your code
  return ` The number ${number} is divisible by 3`;
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  return ` The number ${number} is divisible by 5`;
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
