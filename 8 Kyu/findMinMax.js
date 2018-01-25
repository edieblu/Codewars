// Your task is to make two functions, max and min 
// (maximum and minimum in PHP) that take a(n) array/vector 
// of integers list as input and outputs, respectively, 
// the largest and lowest number in that array/vector.

// easiest way of doing it is with Math.max(). Math.min()
// my solution

var max = function(list){
	 return list.reduce(function(a,b) {
		return (a > b ? a : b)
	})
}

var min = function(list){
	return list.reduce(function(a,b) {
		return (a < b ? a : b)
	})
    
}

// solution I liked

var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}