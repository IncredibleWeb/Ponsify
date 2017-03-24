(function() {

    function ponsify(x, y, z) {
		var difference = y - x;
		if (difference < 0) {
			return 0;
		} else if (difference < 1) {
			return x;
		} else {
			var stepCount = (difference / z) | 0;
			// formula for finding the sum of an arithmetic sequence
			var sum = ((stepCount + 1) * ((2 * x) + (stepCount * z))) / 2;
			return sum;
		}
	}
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();




