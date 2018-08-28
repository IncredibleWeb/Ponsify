(function() {

    function ponsify(x, y, z) {
        // Solution 1: Simple for loop
        var total = 0;

        // for loop chosen for code readability
        for(var i = x; i <= y; i+=z){
            total += i;
        }
        return total;

        //Solution 2: potentially faster solution (but less maintainable - hence commented out)
        // //calculate number of steps
        // var steps = Math.floor((y-x)/z) +1;
        //
        // //check steps are positive
        // steps = (steps>=0? steps : 1);
        //
        // // Sum of finite arithmetic series
        // total = (steps/2)*((2 * x) + (steps - 1)*z);
        //
        // return total;
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
