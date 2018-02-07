// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits 
// in a number. Given n, take the sum of the digits of n. 
// If that value has two digits, continue reducing in this 
// way until a single-digit number is produced. This is only 
// applicable to the natural numbers.

// my solution
function digital_root(n) {
	var arr = String(n).split("");

	if (arr.length < 2) {
		result = Number(arr[0]);
	}

	while (arr.length > 1) {
		for (var i = 0, result = 0; i < arr.length; i++) {
			result+= Number(arr[i]);
		}
		arr = String(result).split("");
		
	} 
	return result;

}

// solution I liked

function digital_root(n) {
  if (n < 10)
    return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);
   
  return digital_root(sum);
}