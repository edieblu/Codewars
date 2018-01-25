// Your task is to make a function that can take 
// any non-negative integer as a argument and return it 
// with its digits in descending order. Essentially, 
// rearrange the digits to create the highest possible number.

// my solution
function descendingOrder(n){
  return parseInt(n.toString().split("").sort(function(a,b){
  	return b-a;
  }).join(""))
}

// solution I liked

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}