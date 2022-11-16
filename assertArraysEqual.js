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


// assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true

/*
// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4, 5]), 'should be false') // => false


eqArrays(["1", "2", "3"], ["1", "2", "3"], 'a2') // => true
eqArrays(["1", "2", "3"], ["1", "2", 3], 'a2') // => false



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
*/