(function() {

    function ponsify(x, y, z) {
        if(x > y) {
            return 0;
        }
        else if(x === y) {
            return x;
        }
        else {
            var n = Math.floor((y - x) / z);
            var sum = (n + 1) / 2 * (x + (x + (n * z)) );
            return sum;
        }
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
