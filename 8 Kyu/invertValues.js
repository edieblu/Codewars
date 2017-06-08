// Invert Values

function invert(array) {
	var newArray = [];
	for (var i = 0; i < array.length; i++){
		if (array[i] !=0){
			newArray.push(array[i]*-1);
		} else  {
			newArray.push(0);
		}
	}
   return newArray;
}

// Best Solution
function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}