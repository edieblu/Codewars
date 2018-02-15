// The goal of this exercise is to convert a string to a 
// new string where each character in the new string is '(' 
// if that character appears only once in the original string, 
// or ')' if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// Examples:

// "din" => "((("

// "recede" => "()()()"

// "Success" => ")())())"

// "(( @" => "))(("

// my solution
// 1. create object for counting each ocurrence of a word
// 2. use object.count to decide what to push into the result array

function duplicateEncode(word){
	var freq = {};
	var result = [];
	word = word.toLowerCase();
	var arr = word.split("");
	
	console.log(arr)
	for (var i = 0; i < word.length; i++) {
		var char = word.charAt(i);
		if (freq[char]) {
			freq[char]++;
		} else {
			freq[char] = 1;
		}
	}
	for (var i = 0; i < arr.length; i++){
		if (freq[arr[i]] === 1) {
			result.push("(")
		} else {
			result.push(")")
		}
	}
	return result.join("");

}

// solution I liked
// using lastIndexOf to find the last ocurrence of the item

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

