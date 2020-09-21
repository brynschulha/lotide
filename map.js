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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// map(words, word => word[0]);
// const results1 = map(words, word => word[0]);
// console.log(results1);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);

const numbers = [1, 2, 3, 4, 5, 6];

assertArraysEqual(map(numbers, number => number * 2), [2, 4, 6, 8, 10, 12]);

assertArraysEqual(map(words, word => word.slice(1)), ['round', 'ontrol', 'o', 'ajor', 'om']);

module.exports = map;