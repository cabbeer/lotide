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


// first attempt, use for of loop, failed cause slice needs index value to

const without = function(source, itemsToRemove) {
  let sourceCopy = [...source];

  for (let x=0; x < itemsToRemove.length; x++) {
    for (let y=0; y < sourceCopy.length; y++) {
      if (itemsToRemove[x] === sourceCopy[y]) {
        sourceCopy.splice(y, 1)
        //console.log('index to remove is:', y)
      }
    }
  }
  return sourceCopy;
/*
  console.log('source:', source);
  console.log('item removed:', itemsToRemove)
  console.log('source copy', sourceCopy);
  console.log('-------')
*/  
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]