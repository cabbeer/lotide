/*
//test code (copied)
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎟️ Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed ${actual} !=== ${expected}`);
  }
};
*/

///goal: Search object and return first key that contains value
const findKeyByValue = function(object, value) {

  let found = '';

  for (let property in object) {
    if (object[property] === value) {
      found = property;
    }
  }
  return found
  //console.log(found);

};

module.exports = findKeyByValue;




/* Test Code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire")
findKeyByValue(bestTVShowsByGenre, "The Expanse")

//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/