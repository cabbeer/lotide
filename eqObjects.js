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
  return returnME;

};

const eqObjects = function (obj1, obj2) {

  //if key lenths are different, return false
  if (Object.keys(obj1).length !== Object.keys(obj2).length) { return false}

  //loop through array of key values
  for( let keys1 of Object.keys(obj1)) {

    // if both objects have an array at the same key value; use eqArrays [else if]: check key values
    if(Array.isArray(obj1[keys1]) && Array.isArray(obj2[keys1])) {
      return eqArrays(obj1[keys1], obj2[keys1]);
    } else if (obj1[keys1] !== obj2[keys1])  {
      return false;
    }  
}
return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(abc, ab)); // => false



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false