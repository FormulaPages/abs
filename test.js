var abs = require('./ABS');
var assert = require('assert');

describe('abs', function() {
  it('should convert number to absolute value', function() {
    assert( abs(1) === 1, 'Should still be 1');
    assert( abs(-1) === 1, 'Should still be 1');
  });
})
