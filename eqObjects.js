const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  }
 };

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
 
 
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false