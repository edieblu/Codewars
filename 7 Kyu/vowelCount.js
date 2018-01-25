// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

function getCount(str) {
	var vowel = str.match(/[aeiou]/gi);
	return vowel === null ? 0 : vowel.length
  return vowel.length;
}
console.log(getCount("Valerie"));

// Best Solution

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}