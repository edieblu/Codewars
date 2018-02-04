// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// my clunky solution

function findOdd(A) {
	// create empty object to store occurrences of an item 
	var result = {};
	// the solution is stored in variable odd
	var odd;
	// for each to go over the array
	A.forEach(function(v, i){
		// create initial key
		if (!result[v]) {
			result[v] = [i];
		// create values
		} else {
			result[v].push(i);
		}
	});

	for(key in result) {
	    if(result.hasOwnProperty(key)) {
	        var value = result[key];
	        // if the length of the value (array) is odd
	        if (value.length % 2 !== 0) {
	        	// return the key
	        	odd = key;
	        }
	    }
	} return Number(odd);
}

// solution I liked

function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}


