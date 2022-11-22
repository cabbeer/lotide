const assertEqual = require('./assertEqual');

const tail = function(input) {
  
  if(input.length > 1) {
    return input.slice(1);
  } else {
    return input[0]
  }
  
};

module.exports = tail;