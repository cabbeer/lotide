//const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(['5']), '5'); 
  });

  it("check that the original array is unmodified", () => {
    const input = [1,2,3]
    assert.deepEqual(tail(input), [2,3]); 
    assert.deepEqual(input, [1,2,3]); 
  });

  it("returns [Lighthouse, Labs] for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
  });

});