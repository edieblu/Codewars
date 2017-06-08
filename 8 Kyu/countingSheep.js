// Counting sheep...
function countSheeps(arrayOfSheep) {
  function isTrue(value) {
  	return value === true;
}
	var filtered = arrayOfSheep.filter(isTrue);
	return filtered.length;
}

// Best solution

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}