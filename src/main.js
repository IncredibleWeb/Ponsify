(function() {

    function ponsify(x, y, z) {
        // Add your code here
        
        if(x > y){
        
            return 0;
      
        }else if(x == y){
      
            return x;
        
        }else{
        
        var t = Math.floor(y/z); //how many terms to use in sum
        return (t/2) * ((2*x) + (t-1) * z); // sum of arithmetic series
      
        }
        
        console.log("Hello world!");
        return -1;
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
