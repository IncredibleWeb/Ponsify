(function () {
    function ponsify(x, y, z) {
        if (x > y) {
            console.log("The lower and upper limits are invalid!");
            return 0;
        } else {
            var sum = 0;
            for (x; x <= y; x += z) {
                sum += x;
            }
            console.log("The sum is: " + sum);
            return sum;
        }
        return -1;
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();