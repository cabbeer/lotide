const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(a, b) {
  
  if (eqArrays(a,b)) {
    console.log(`🎟️ Assertion passed ${a} === ${b}`);
  } else {
    console.log(`❌ Assertion failed ${a} !=== ${b}`);
  }

};

module.exports = assertArraysEqual;