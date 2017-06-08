// Sum without highest and lowest number

function sumArray(array) {
	if (typeof array != "undefined" && array != null && array.length > 0){
		array.sort(function(a, b){return a-b});
		array.pop();
		array.shift();
		var sum = array.reduce((a,b) => a+b);
		return sum;
	} else {
		return 0;
	}

}



