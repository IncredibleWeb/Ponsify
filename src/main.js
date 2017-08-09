(function() {

    function ponsify(x, y, z) {
        // Add your code here
        var sum=0;
		if(x>y){
			return 0;
		}
		else if(x==y) {
			return x;
		}
		else{
			for (i = x; i <= y; i+=z) {
				sum+=i;
			}
			return sum;
		}
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
