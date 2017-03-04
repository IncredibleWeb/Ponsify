(function() {

    function ponsify(x, y, z) {
        if (x === y) {
					return x;
				} else if (x > y) {
					return 0;
				} else {
					var n = Math.floor((y - x) / z) + 1;
					return (2 * x + (n - 1) * z) * n / 2;
				}
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
