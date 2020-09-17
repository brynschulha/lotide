const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    } 
  }
  return true;
};

 const eqObjects = function(object1, object2) {
   let objKeys1 = Object.keys(object1);
   let objKeys2 = Object.keys(object2);
   if (objKeys1.length !== objKeys2.length) {
      return false;
   } else {
      for (const key of objKeys1) {
        if (!Array.isArray(object1[key])) {
           if (object1[key] !== object2[key]) {
            console.log("Objects are NOT equal!");
            return false;
           }
        } else if (Array.isArray(object1[key])) {
            if (!eqArrays(object1[key], object2[key])) {
              return false;
            }
          }
      }
   } return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`😡😡😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`💚💚💚 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

let ab = {a: 1, b: 2};
let ba = {b: 2, a: 1}; 
assertObjectsEqual(ab, ba);
