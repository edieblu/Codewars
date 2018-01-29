// Create a function that returns the sum of the two 
// lowest positive numbers given an array of minimum 
// 4 integers. No floats or empty arrays will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], 
// the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// my solution

function sumTwoSmallestNumbers(numbers) {  
	var sorted = numbers.sort(function(a,b){
  	return a-b;
  });
	var sumTwo = function(a,b) {
		return a+b;
	};
   return sumTwo(sorted[0],sorted[1]);
};

// solution I liked
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};