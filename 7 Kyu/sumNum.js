// Given two integers a and b, which can be positive or negative, 
// find the sum of all the numbers between including them too 
// and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function GetSum(a,b){
   var nums = [];
   nums.push(a,b);
   nums.sort(function(){
   	return a-b});
   if (a != b) {
   		total = nums[0]
	   for (var i =nums[0]; i < nums[1]; i++){
	   	total++;
	   } if (nums[0] != 0 && nums[1] != 0) {
	   return total;
	   } else {
	   	return total -1;
	   }  
	} else {
		return a;
	}
}

console.log(GetSum(-1,0));