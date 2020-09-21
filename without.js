const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    } 
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  }
 };

const without = function(source, itemsToRemove) {
  let newArray = [];
    for (let j = 0; j < source.length; j++) {
     let found = false;
      for (let i = 0; i < itemsToRemove.length; i++) {
      if (itemsToRemove[i] === source[j]) {
        found = true;
        break;
      }
    }
      if(!found) {
        newArray.push(source[j]);
      }
  }
  console.log(newArray);
};

let original = [1, 2, 3, 4]
without(original, [1, 2]);
console.log(original);

// const without = function(source, itemsToRemove) {
//   let newArray = [];
//     for (let j = 0; j < source.length; j++) {
//      if (!itemsToRemove.includes(source[j])) {
//        newArray.push(source[j]);
//      }
//   }
//   console.log(newArray);
// };

module.exports = without;