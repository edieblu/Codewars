// Write function avg which calculates average of numbers in given list.

// my solution

function find_average(arr) {
  return arr.reduce(function(a,b){
  	return a+b;
  }, 0)/arr.length;
}

// soulution I liked

function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}