(function () {
    function ponsify(x, y, z) {
        if (x > y) {
            return 0;
        } else if (x == y) {
            return x;
        } else {
            var terms = Math.floor((y - x) / z) + 1;
            var sum = (terms / 2) * (2 * x + (terms - 1) * z);
            return sum;
        }

        return -1;
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();