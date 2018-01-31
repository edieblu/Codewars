// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the row sums of this triangle 
// from the row index (starting at index 1) e.g.:

function rowSumOddNumbers(n) {
	var totalNums = 1;
	var result = [1];
	var odds = 3;
	for (var i = 1; i < n; i++){
		totalNums+=i;
	} 
	while (totalNums + n -1 > 1) {
		result.push(odds);
		odds+=2;
		totalNums--;
	} return result.slice(result.length-n).reduce(function(a,b){
		return a+b;
	});
};

console.log(rowSumOddNumbers(5));


// row 1 = 1 (1)  
// row 2 = 3 (2) 5
// row 3 = 7 (4) 9 11
// row 4 = 13 (7) 15 17 19
// row 5 = 21(11) 23 25 27 29