(function() {

    function ponsify(x, y, z) {
        
      if (x < 0 || y < 0){
        return 0;
      }

      if(x == null || y == null){
        return 0;
      }

      if (x > y){
        return 0;
      }

      if (x == y){
        return x;
      }

      var sum = 0;
      for (x; x <= y; x+=z){
        sum = x + sum;
      }    
      return sum;
 
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
