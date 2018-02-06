// You are given an array (which will have a length of at least 3, 
// 	but could be very large) containing integers. The array is 
// either entirely comprised of odd integers or entirely comprised 
// of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

// my solution
function findOutlier(integers){
	var result = {
		// an object that saves "count" and "index" of each occurrence
		Even: [0, 0],
		Odd: [0, 0]
	}
	for (var i = 0; i < integers.length; i++) {
		if (integers[i] % 2 === 0){
			result.Even[0]++;
			result.Even[1]=i;
		} else {
			result.Odd[0]++;
			result.Odd[1]=i;
		}
	} if (result.Even[0] > 1) {
		return integers[result.Odd[1]];
	} else {
		return integers[result.Even[1]];
	}
} //end function

// solution I liked
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}