// Mumbling
// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// https://www.codewars.com/kata/mumbling/train/javascript

function accum(s) {
	// capitalize string
	s = s.toUpperCase()
	// convert string to array
	var newArray = s.split('');
	// new variable for storing result
	var result = '';
	for (var i = 0; i < newArray.length; i++) {
		// return character + character repeated position times 
		//(if position is 0, repeat 0 times, if 1, repeat 1 times)
		// add -
		result += newArray[i] + newArray[i].toLowerCase().repeat(i) + '-';
	}
	// return result and chop off the last -
	return result.slice(0,result.length-1);
}

// Best Solution

function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}