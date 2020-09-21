const tail = function(someArray) {
  let tailArray = [];
  for (let i = 1; i < someArray.length; i++) {
      tailArray.push(someArray[i]);
  }
  console.log(tailArray);
  return tailArray;
};

module.exports = tail;
