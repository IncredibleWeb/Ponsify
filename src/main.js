(function() {

    function ponsify(x, y, z) {
        if (x <= y && z > 0) {
            // return the sum of integers from lower limit x to upper limit y with step z
            var n = Math.floor((y - x + z)/z);
            return (2*x + (n - 1)*z)*n/2;
        }
        // return 0 when the upper limit is less than the lower limit or step is not positive
        else {
            return 0;
        }
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
