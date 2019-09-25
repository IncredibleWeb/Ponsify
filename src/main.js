(function() {

    function ponsify(lowerLimit, upperLimit, step) {
        
        var numberArray = [];
        
        if (lowerLimit <= upperLimit) {

            // To find the amount of integers which lie between the lower limit and the upper limit using the given step
            var n = Math.floor((upperLimit - lowerLimit) / step);

            // Using the formula for the sum of an arithmetic sequence:
            // Sum = (n/2)(firstTerm + lastTerm)
            // In this case n should be added by 1 to include for the lower limit.
            var total = ((n+1)/2) * (lowerLimit + (lowerLimit + (n * step)));
            return total; 

        } else {
            return 0;
        }
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
