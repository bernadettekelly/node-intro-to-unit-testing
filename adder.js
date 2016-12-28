const should = require('chai').should();

const adder = require('../adder');

describe('adder', function() {

  it('should add two numbers', function() {
   
    const normalCases = [
      {a: 1, b: 2, expected: 3},
      {a: 10, b: 10, expected: 20},
      {a: 40, b: 60, expected: 100}
    ];
    
    normalCases.forEach(function(input) {
      const answer = adder(input.a, input.b);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    const badInputs = [
      ['tree', 2],
      [1, 'pink'],
      ['seven', 4]
    ];
    
    badInputs.forEach(function(input) {
      (function() {
          adder(input[0], input[1])
      }).should.throw(Error);
    });
  });
});

module.exports = adder;