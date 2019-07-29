'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

/* Add your explanation as a comment here
1. X is declared as global variable.Though it is parameter of function, it is manipulated inside the function but
.The scope of the passed value is within
the scope of function.So console of x still display the value as 9.

2. The x is one of the reference variable inside the object. The function  manipulates the x by its reference and whenever
the reference of object is made we are getting the updated value of x. */
