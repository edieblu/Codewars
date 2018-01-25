function highAndLow(numbers){
	var newArray = numbers.split(' ').map(Number);
	newArray.sort(function(a, b){return a-b});
	var result = newArray[newArray.length-1] + " " + newArray[0];
	return result;

}

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));