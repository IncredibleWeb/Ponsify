(function() {

    function ponsify(x, y, z) {
        
	if (x < 0 || y < 0 || x == null || y == null){
		return 0;
	}

	if (x > y){
		return 0;
	}

	if (x == y){
		return x;
	}

	var n   = y / z;
	var an  = x + (n - 1) * z;
	sum     = n * (x + an) / 2;

	return sum;
 
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
