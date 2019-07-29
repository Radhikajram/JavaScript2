'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let result = '';
  if (num <= 0) {
    result = '';
  } else {
    for (let i = 0; i < num; i++) {
      result = result + str;
    }
  }
  // Replace this comment and the next line with your code
  console.log(str, num, result);

  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let result = '';

  if (num <= 0) {
    result = '';
  } else {
    while (num > 0) {
      result = result + str;
      num--;
    }
  }
  // Replace this comment and the next line with your code
  console.log(str, num, result);

  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let result = '';
  if (num <= 0) {
    result = '';
  } else {
    do {
      result = result + str;
      num--;
    } while (num > 0);
  }
  // Replace this comment and the next line with your code
  console.log(str, num, result);

  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
