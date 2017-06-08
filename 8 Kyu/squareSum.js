//Square(n) Sum

function squareSum(numbers){
	var result = 0;
	for (var i =0; i < numbers.length; i++){
		result += (numbers[i]*numbers[i]);
	}
	return result;
}

// Best Solution
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
