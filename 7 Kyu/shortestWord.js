// x Simple, given a string of words, return the length 
// of the shortest word(s).

// String will never be empty and you do not need to account 
// for different data types.

// my solution

function findShort(s){
	return parseInt(s.split(" ").map(function(word){
		return word.length
	}).sort(function(a,b){
		return a-b;
	}).slice(0,1))
}
