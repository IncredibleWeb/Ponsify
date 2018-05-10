(function() {

    function ponsify(x, y, z) {
        // Add your code here       
        if(x>y){
            return 0;
        }
        if(x==y){
            return x;
        }
        if(x<y){
            var result = 0;
            var box = [];
            var counter=0;
            
            for (var i = x; i<=y; i++){
                box.push(i);
            }
            for (var j=1; j<box.length; j++){
                counter++;
                if(counter == z){
                    counter =0;
                    result += box[j];                    
                }
            }
            result +=box[0];
            return result;
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
