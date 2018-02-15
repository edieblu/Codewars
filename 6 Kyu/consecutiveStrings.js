// You are given an array strarr of strings and an integer k. 
// Your task is to return the first longest string consisting of 
// k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", 
// 	"libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// my solution

function longestConsec(strarr, k) {
    var result = [];
    if (strarr.length === 0 || k > strarr.length || k <=0) {
    	return ""
    } else {
    	for (var i = 0; i < strarr.length; i++){
    		result.push(strarr.slice(i,k+i).join(""))
    };
		    return result.reduce(function(longest, currentWord){
		    	return currentWord.length > longest.length ? currentWord : longest
		  }, "");
    };
}



