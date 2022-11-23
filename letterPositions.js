/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎟️ Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed ${actual} !=== ${expected}`);
  }
};

const eqArrays = function(a, b) {

  let returnME = false;

  // Gaurd Clause
  if (a.length !== b.length) {
    //console.log(returnME)
    return returnME;
  }
  // check every value of array a and compare it the value of array b at the same index
  if (a.every((value, index) => value === b[index])) {
    returnME = true;
  }
  //console.log(returnME);
  return returnME;

};

const assertArraysEqual = function(a, b) {
  if (eqArrays(a,b)) {
    console.log(`🎟️ Assertion passed ${a} === ${b}`);
  } else {
    console.log(`❌ Assertion failed ${a} !=== ${b}`);
  }

};
*/
//^^^^^^^^^^^^^^ previous code^^^^^^^^^^^^^^



const letterPositions = function(sentence) {
  const results = {};
  
  for (let x=0; x < sentence.length; x++) {

    if (results[sentence[x]]) {
      results[sentence[x]].push(x);
    } else {
      results[sentence[x]] = [];
      results[sentence[x]].push(x);
    }
  }

  return results;
};

module.exports = letterPositions;

//console.table(letterPositions('simpsons'))
//console.table(letterPositions('kabir'))




//assertArraysEqual(letterPositions("hello").e, [1]);




