// Difference of Volumes of Cuboids

function find_difference(a, b) {
 	var result =  (a[0]*a[1]*a[2]) - (b[0]*b[1]*b[2]);
 	return Math.abs(result);
}

// Best Solution

function find_difference([a,b,c], [d,e,f]) {
  return Math.abs(a*b*c-d*e*f)
}