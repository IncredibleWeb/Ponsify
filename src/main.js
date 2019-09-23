(function() {

    function ponsify(lowerLimit, upperLimit, step) {
        
        let numberArray = [];
        let total = 0;
        
        if (lowerLimit <= upperLimit) {
            for (i = lowerLimit; i <= upperLimit; i += step) {
                numberArray.push(i);
            }
    
            /* Using the forEach array method, the total is
               obtained by adding the value of every integer 
               in the array to the empty variable 'total' */
            numberArray.forEach(element => {
                total += element;
            });
        }

        return total;
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
