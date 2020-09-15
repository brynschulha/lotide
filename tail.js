const tail = function(someArray) {
  let tailArray = [];
  for (let i = 1; i < someArray.length; i++) {
    tailArray.push(someArray[i]);
  }
  console.log(tailArray);
};


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  }
};

// TEST CODE



const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);


