const assertEqual = require('./assertEqual');

const eqArrays = function(a, b) {

  let returnME = false;

  // Gaurd Clause
  if (a.length !== b.length) {
    return returnME;
  }
  // check every value of array a and compare it the value of array b at the same index
  if (a.every((value, index) => value === b[index])) {
    returnME = true;
  }
  console.log(returnME);
  return returnME;

};

module.exports = eqArrays;