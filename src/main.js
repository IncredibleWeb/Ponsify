(function() {

    function ponsify(lowerLimit, upperLimit, step) {

        // Same values
        if( lowerLimit == upperLimit ) return lowerLimit;

        // Invalid range
        if( lowerLimit > upperLimit ) return 0;

        var total = lowerLimit;

        for( var i = lowerLimit; i <= ( upperLimit - step ); i += step ) {

            var m = i + step;
            
            total += m; 
        }

        return total;
            
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
