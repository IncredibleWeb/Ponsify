(function() {

    function ponsify(x, y, z) {
        // Add your code here   
        if (x <= y && z > 0) {            
            var n = Math.floor((y - x + z)/z); //Step
            return (2*x + (n - 1)*z)*n/2; //Summation
        }        
        else {
            return 0;
        }        
        
        //______my solution__________   
        console.log("Hello world!");
        return -1        
    }    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
