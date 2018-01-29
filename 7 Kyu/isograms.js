// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. Implement a function 
// that determines whether a string that contains only letters 
// is an isogram. Assume the empty string is an isogram. 
// Ignore letter case.

// my solution 

function isIsogram(str){
	var result = [];
	var arr = str.toLowerCase().split("");
	for (var i = 0; i < arr.length; i++){
		if (result.indexOf(arr[i])===-1) {
			result.push(arr[i]);
		}
	} if (result.join("") === str.toLowerCase()) {
		return true;
	} else {
		return false;
	}
}

// solution I liked
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}