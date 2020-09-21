const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  }
 };

 const countLetters = function(stringInput) {
  const results = {};

  for (const letter of stringInput) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  console.log(results);
  return results;
}

countLetters ("lighthouse in the house");

countLetters ("bryn is so cool");

module.exports = countLetters;