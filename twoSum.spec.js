const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  
  it('Returns an array', () => {
    expect(twoSum()).to.deep.equal([]);
  });

  it('Returns indices of two numbers in array that add to the target value', () => {
    expect(twoSum([1,2,3], 5)).to.deep.equal([1,2]);
  });

  it('Returns an empty array if no numbers add to the target', () => {
    expect(twoSum([1,2,3], 15)).to.deep.equal([]);
  });

  it('Works on an unsorted array', () => {
    expect(twoSum([3,1,2], 5)).to.deep.equal([0,2]);
  });


});