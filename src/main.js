(function() {

    function ponsify(lowerLimit, upperLimit, step) {
		if(lowerLimit > upperLimit)
		{
			return 0;
		}
		else
		{
			if(lowerLimit <= upperLimit)
			{
				if(lowerLimit == upperLimit)
				{
					return lowerLimit;
				}
				else
				{
					return lowerLimit + ponsify((lowerLimit+step), upperLimit, step);
				}
			}
		}
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
