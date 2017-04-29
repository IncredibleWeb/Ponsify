(function() {
	/**
	 * A Test function that sums all the integers from the first parameter, 
	 * the lower limit; to the second parameter, the upper limit (both inclusive);
	 * going in steps expressed as the third parameter. 
	 * All parameters are positive integers.
	 *
	 * Example:
	 * ponsify(1, 5, 1)  // should return the sum of 1 + 2 + 3 + 4 + 5 
	 * ponsify(2, 12, 3) // should return the sum of 2 + 5 + 8 + 11
	 * ponsify(5, 4, 2)  // should return 0 as the range is invalid 
	 * ponsify(3, 3, 2)  // should return 3
	 *
	 *
	 * @function
	 * @param {Number} x - Lower Limit.
	 * @param {Number} y - Upper Limit.
	 * @param {Number} z - Step.
	 * @return{Number} If x <= y, sum the numbers from x to y at step z, otherwise it returns 0
	 */
    function ponsify(x, y, z) {
		if((x,y,z) > 0 && x <= y){			// Checks passed parameters
			n = Math.floor((z - x + y) / z);// Calculates the number of lesser or equal y words that make up the progression
			an = (x + (n - 1) * z);			// Calculate nth term of the sequence
			return ((1/2 )* n * (x + an));	// Calculate and return the sum of arithmetic progression
		}
		
		return 0;							// Returns 0 if x is greater than y and if or x or y or z is less than 0
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
