// Double Char

function doubleChar(str) {
	 var newArray = str.split('');
	 var results = [];
	 for (var i = 0; i < newArray.length; i++){
		results +=newArray[i].repeat(2);
	 }
  return results;
}

// Best Solution

const doubleChar = (str) => str.split("").map(c => c + c).join("");