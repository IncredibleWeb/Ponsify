var assert = require('assert');
var ponsify = require('../dist/script.min.js');

describe('Ponsify', function() {
    it('should return the sum of integers between the lower and upper limits going in steps', function() {
        assert.equal(55, ponsify(1, 10, 1));
        assert.equal(26, ponsify(2, 12, 3));
        assert.equal(18, ponsify(3, 9, 3));
    });
    it('should return X when the lower limit and upper limit are equal to X', function() {
        assert.equal(3, ponsify(3, 3, 3));
        assert.equal(2, ponsify(2, 2, 1));
        assert.equal(1, ponsify(1, 1, 4));
    });
    it('should return 0 when the upper limit is less than the lower limit', function() {
        assert.equal(0, ponsify(4, 3, 2));
    });
    //edge case (in case number is no longer an integer)
    it('should return X when the number contains decimal points', function () {
        assert.equal(4.5, ponsify(0.5, 1.0, 0.1));
        assert.equal(0.5, ponsify(0.5, 1.0, 1));
    });
});
