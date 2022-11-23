const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎟️ Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed ${actual} !=== ${expected}`);
  }
};


const countLetters = function(sentence) {

  let nuSentence = sentence.replaceAll(" ", "");
  const countResults = {};

  for (const char of nuSentence) {
    if (countResults[char]) {
      countResults[char] += 1;
    } else {
      countResults[char] = 1;
    }
  }
  return countResults;
  //console.table(countResults);
};

module.exports = countLetters;

// countLetters("lighthouse in the house");


