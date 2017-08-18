(function() {
    function ponsify(x, y, z) {
        if (x <= y) {
            // return the sum of integers from lower limit x to upper limit y with step z
            var sum = 0;
            while (x <= y) {
                sum += x;
                x += z;
            }
            return sum;
        }
        // return 0 when the upper limit is less than the lower limit
        else {
            return 0;
        }
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
