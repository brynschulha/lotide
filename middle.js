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

 module.exports = middle;