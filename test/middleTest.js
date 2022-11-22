// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("Even case1: returns [2,3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });

  it("Even case1: returns [2,3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });

  it("No mid, case1: returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });

  it("No mid, case2: returns [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]), []); 
  });

  xit("test for non objects, not required/ supported", () => {
    assert.deepEqual(middle(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
  });

});

