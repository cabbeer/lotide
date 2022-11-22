const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

//assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true


// TEST CODE
// console.log(eqArrays([1, 2, 3], [1, 2, 3, 4, 5]), 'should be false') // => false


// eqArrays(["1", "2", "3"], ["1", "2", "3"], 'a2') // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3], 'a2') // => false



// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS