// const assertArraysEqual = function(a, b) {
//   if (eqArrays(a,b)) {
//     console.log(`🎟️ Assertion passed ${a} === ${b}`);
//   } else {
//     console.log(`❌ Assertion failed ${a} !=== ${b}`);
//   }

// };
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;
// module.exports = assertArraysEqual;


// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// //console.log(results1);