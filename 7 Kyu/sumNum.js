// Given two integers a and b, which can be positive or negative, 
// find the sum of all the numbers between including them too 
// and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// mu solution

function GetSum(a,b){
 if (a === b) {
 	return a;
 } else {
 	var total = 0;
 	var sorted = [];
 	sorted.push(a,b);
 	sorted = sorted.sort(function(a,b){
 		return a-b;
 	});
 	for (var i = sorted[0]; i <= sorted[1]; i++){
 		total += i;
 	}
 } return total;
}

// solution I liked (and still struggle to understand but, it's so clever!!)
function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}