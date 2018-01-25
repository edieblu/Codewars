// Write a program that finds the summation of every 
// number between 1 and num. The number will always be a 
// positive integer greater than 0.

// my solution
var summation = function (num) {
  total = 1;
  if (num!=0) {
  	while (num > 1) {
  	total+=num;
  	num--;
  	}
  } else {
  	total = 0;
  }
  return total;
}

//solution I liked

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}
