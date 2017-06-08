// Sum of Positive

function positiveSum(arr) {
	total = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > 0){
			total+= arr[i];
		}
	} return total;
	}

