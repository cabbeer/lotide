
const findKey = function (object, cb) {

  for (let keys in object) {
    if(typeof object[keys] === object) {
      findKey(object[keys], cb)
    } else {
      if (cb(object[keys])) {
        return keys
      }
    }
  }
}

/*
// tried to refactor it using arrow functions and turnery opperator, how to put if statement in else block of ternary operator?
const findKey = (object, cb) => {

  Object.keys(object).forEach(key => (typeof object[key] === 'object') ? findKey(object[key], cb) : cb(object[keys]) {return keys} )

}



const findKey = (object, cb) => {
  
  Object.keys(object).filter(keys => object[keys] === 'object' ? findKey(object[keys], cb) : )
}

*/


//callback

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"



console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 4 }
}, x => x.stars === 4)); // => "Akelarre"


console.log(findKey({
  "Blue Hill": { stars: 7 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 7)); // => "Blue Hill"