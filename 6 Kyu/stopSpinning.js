// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter 
// words reversed (Just like the name of this Kata). Strings 
// passed in will consist of only letters and spaces. Spaces 
// will be included only when more than one word is present.

// my solution

function spinWords(s){
  var arr = s.split(" ");
  var result = [];
  for (var i = 0; i < arr.length; i++) {
  	if (arr[i].length > 4) {
  		result.push(arr[i].split("").reverse().join(""));
  	} else {
  		result.push(arr[i]);
  	}

  }
	return result.join(" ");
}

console.log(spinWords("Hey fellow warriors" ));

// solution I liked

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}



