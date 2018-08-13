const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Can wrap a string that is longer than 6 characters', () => {
  	expect(wrap("Lorem ipsum ", 6)).to.equal('Lorem\nipsum');
  });

  it('Wraps word longer than column length', () => {
  	expect(wrap("Loremhello ipsum ", 6)).to.equal('Loremhello\nipsum');
  });

  it('Can wrap multiple lines', () => {
  	expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal('Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.');
  });

  it('Can wrap multiple lines with various word lengths', ()=> {
  	expect(wrap('this is a bigLine', 5)).to.equal('this\nis a\nbigLine')
  })
  it('Can wrap a single word greater than colunm length', ()=> {
  	expect(wrap('hello',2)).to.equal('hello');
  })


});










