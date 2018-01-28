// Take 2 strings s1 and s2 including only letters from ato z. 
// Return a new sorted string, the longest possible, 
// containing distinct letters,

// each taken only once - coming from s1 or s2. 
// #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" 

// my solution

function longest(s1, s2) {
  var result = [];
  var together = (s1+s2).split("");
  for (var i = 0; i < together.length; i++) {
  	if (result.indexOf(together[i]) === -1) {
  		result.push(together[i]);
  	}
  } return result.sort().join("");
}

// solution I liked

function longest(s1, s2) {
  return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}
