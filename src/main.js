(function() {

    function ponsify(x, y, z) {
        if(x > y) {
            return 0;
        }
        else {
            var sum = 0;
            for(var i = x; i <= y; i += z) {
                sum += i;
            }
            return sum;
        }
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
