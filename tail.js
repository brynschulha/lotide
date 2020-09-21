const tail = function(someArray) {
  let tailArray = [];
  for (let i = 1; i < someArray.length; i++) {
    if (i === someArray.length - 1) {
      tailArray.push(someArray[i]);
    }
  }
  console.log(tailArray);
  return tailArray[0];
};

module.exports = tail;
