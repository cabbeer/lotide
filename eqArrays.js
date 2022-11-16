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
    return returnME;
  }
  // check every value of array a and compare it the value of array b at the same index
  if (a.every((value, index) => value === b[index])) {
    returnME = true;
  }
  console.log(returnME);
  return returnME;

};

/*
// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4, 5]), 'should be false') // => false
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"], 'a2') // => true
eqArrays(["1", "2", "3"], ["1", "2", 3], 'a2') // => false



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
*/