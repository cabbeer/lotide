//const assertArraysEqual = require('./assertArraysEqual');
//const eqArrays = require('./eqArrays');

// ACTUAL FUNCTION
const middle = function(array) {

  //empty array to hold middle values
  let midArr = [];
  
  //Garud clause: no arrays smaller than 2
  if (array.length < 3) return midArr;

  //odd array, find middle then push that value and the one after it
  if (array.length % 2 === 0) {
    let midStart = array.length / 2;
    midArr.push(midStart, midStart + 1);
    //console.log(midArr)
    return midArr;
    
  }

  //even array, find middle by adding one to length and dividing by 2
  if (array.length % 2 !== 0) {
    let midStart = (array.length + 1) / 2;
    midArr.push(midStart);
    //console.log(midArr)
    return midArr;
  }

};

module.exports = middle;