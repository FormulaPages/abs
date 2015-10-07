var abs = require('./ABS');
var assert = require('assert');
var error = require('formula-errors');

describe('abs', function() {
  it('should convert number to absolute value', function() {
    assert( abs(1) === 1, 'Should still be 1');
    assert( abs(-1) === 1, 'Should still be 1');
    assert( abs('foo') === error.value, 'Should still be error.value');
    assert( abs(NaN) === error.value, 'Should still be error.value');
    assert( abs(Number.POSITIVE_INFINITY) === error.value, 'Should still be error.value');
    assert( abs(Number.NEGATIVE_INFINITY) === error.value, 'Should still be error.value');
  });
})
