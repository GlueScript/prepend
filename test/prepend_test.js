var filter = require('../src/lib/filter'),
    assert = require('assert');

describe('filter', function() {
    describe('prepend', function() {
        it('should return an empty arry when input is empty', function() {
            var input = [];
            var result = filter.prepend(input, '', function(result){
                assert(result instanceof Array);
                assert.equal(0, result.length);
            });
        });
        it('should prepend string to all items in input', function() {
            var input = ['b', 'z'];
            filter.prepend(input, 'a-', function(result){
                assert(result instanceof Array);
                assert.equal(2, result.length);
                assert.equal('a-b', result[0]);
                assert.equal('a-z', result[1]);
            });
        });
        it('should ensure input is an array', function() {
            var input = 'b';
            filter.prepend(input, 'a-', function(result) {
                assert(result instanceof Array);
                assert.equal(1, result.length);
                assert.equal('a-b', result[0]);
            });
        });
    });
});

