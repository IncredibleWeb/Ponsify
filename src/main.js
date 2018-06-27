(function () {

    function ponsify(x, y, z) {
        if (x <= y) {
            return (x + ponsify((x + z), y, z));
        } else {
            return 0;
        }
    }

    /*The less expensive but iterative method is the following:
    function ponsify(x, y, z) {
      if x > y
      {
        return 0;
      }
      
       var j = Math.ceil((y - x) / z);
      console.log(j);
      var ans = 0;
      
      for (var i = 0; i <= j; i++)
        {
          ans += (x + (i*z));
        }
      
      return ans;
    }*/

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
