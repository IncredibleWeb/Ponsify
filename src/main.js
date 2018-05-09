(function() {

    function ponsify(x, y, z) {
        // Add your code here
        function ponsify(a, b, c){

            var result = 0;
  
            for(i=a; i<=b; i+=c){
                result += i;  
            }
  
            return(result);
  
        }

        console.log("Hello world!");
        return -1;
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
