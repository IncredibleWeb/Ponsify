(function() {

    function ponsify(lowerLimit, upperLimit, step) {

        // Same values
        if( lowerLimit == upperLimit ) return lowerLimit;

        // Invalid range
        if( lowerLimit > upperLimit ) return 0;

        var items = [lowerLimit];

        for( var i = lowerLimit; i <= ( upperLimit - step ); i += step ) {

            var m = i + step;
            var n 

            items.push( m );

        }

        var total = 0;
        if( items.length > 0 ) {
            for( var i = 0; i < items.length; i++ ) {
                total += items[i];
            }
        }

        return total;
            
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
