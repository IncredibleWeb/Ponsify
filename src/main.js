(function() {

    function ponsify(x, y, z) {
        // Add your code here
    	var c = 0
    	for (var i = x; i <= y; i+=z){
    		c += i;
    	}
    	
        console.log("Hello world!");
        //return -1;
        return c;
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
