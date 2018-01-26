// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out.

// Note: The function accepts an integer and returns an integer

// my solution

function squareDigits(num){
  return Number(String(num).split("").map(function(n){
  	return n*n;
  }).join(""))
}

// solution I liked

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}