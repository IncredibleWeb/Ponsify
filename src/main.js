(function() {

    function ponsify(x, y, z) {
		var sum = 0;
	    for (var i = x; i <= y; i += z) {
	        sum += i;
	    }
		return sum;
	}
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();


