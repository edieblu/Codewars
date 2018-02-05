// Write a function, persistence, that takes in a positive parameter 
// num and returns its multiplicative persistence, which is the number 
// of times you must multiply the digits in num until you reach a single digit.

// my solution

function persistence(num) {
	// change num to array
   var arr = String(num).split("");
   var count = 0; 
   // check if there's only single digit
   if (arr.length === 1){
   	return count;
   }

   // count number of iterations
 
   // while there's more than a single digit in array
   while (arr.length > 1){
   	// for multiplying digits
   	var total = 1; 
   	for (var i = 0; i < arr.length; i++){
   		total*= arr[i];
   	} // end for
   	arr = String(total).split("");
   	count++;
   } // end while
	return count;
} // end function
console.log(persistence(0))

// solution I liked

function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}
