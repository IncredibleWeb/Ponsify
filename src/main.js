(function() {

    function ponsify(x, y, z) {
        // Add your code here
        var sum = 0;
	var n = (y-x+z)/z;
	var nInt = parseInt(n);
	var tmp = 2*x+(nInt-1)*z;
	sum=tmp*nInt/2;
	return sum;
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
