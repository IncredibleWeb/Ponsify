(function() {

    function ponsify(x, y, z) {
        // Add your code here
        //console.log("Hello world!");
		var numbers = x,sum = 0, count=0;
			while(numbers <= y){
				console.log(numbers);
				console.log("");
				sum = sum + numbers;
				numbers = numbers + z;
				count++;
			}
		if(count > 1){
			console.log("************************************");
			console.log("The Sum OF The Above Numbers = "+sum);
			console.log("************************************");
		}else if(count < 0){
			console.log("************************************");
			console.log("The Sum OF The Above Zero Number = "+sum);
			console.log("************************************");
		}else if(count == 1){
			console.log("************************************");
			console.log("The Sum OF The Above Number = "+sum);
			console.log("************************************");
		}
		
        return sum;
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
