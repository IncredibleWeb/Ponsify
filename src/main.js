(function() {

    function ponsify(x, y, z) {
        // Add your code here
	    
	    if(x > y) {return 0;}
    	var numStep = Math.floor((y - x)/z) + 1;
		console.log("numStep " + numStep);
		var rectangle = x * numStep;
		console.log("rectangle " + rectangle);
		var lastStep = y - ((y - x)%z);
		console.log("lastStep " + lastStep);
		var heightTriangle = lastStep + z - x;
		console.log("heightTriangle " + heightTriangle);
		var triangle = (heightTriangle * numStep) / 2;
		console.log("triangle " + triangle);
		var littleTriangle = (z / 2) * numStep;
		console.log("littleTriangle " + littleTriangle);
		
		return rectangle + triangle - littleTriangle;
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
