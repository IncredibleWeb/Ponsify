(function() {

    function ponsify(lowerLimit, upperLimit, step) {
		if(lowerLimit == upperLimit)
		{
			return lowerLimit;
		}
		else if(lowerLimit > upperLimit)
		{
			return 0;
		}
		else if(lowerLimit > 0 && upperLimit > 0 && step > 0) //the sum does not happen when negative numbers are used
		{
			var total = 0;
			while(lowerLimit <= upperLimit)
			{
				total = total + lowerLimit;
				lowerLimit = lowerLimit + step;
			}
			
			return total;
		}
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
