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


 const middle = function (array) {
   if (array.length < 3) {
     return [];
   } else if (array.length % 2 === 0) {
      let half = array.length / 2;
      let newArray = [];
      newArray.push(array[half - 1]);
      newArray.push(array[half]);
      return newArray;
   } else if (array.length % 2 !== 0) {
      let newnewArray = [];
      let arrayMinus = array.length - 1;
      let arrayMiddle = arrayMinus / 2;
      newnewArray.push(array[arrayMiddle]);
      return newnewArray;
   }
 }
 
 assertArraysEqual (middle([1, 2]), []);
 assertArraysEqual (middle([1, 2, 3]), [2]);
 assertArraysEqual (middle([1, 2, 3, 4]), [2, 3]);