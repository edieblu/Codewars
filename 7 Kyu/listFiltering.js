// In this kata you will create a function that takes 
// a list of non-negative integers and strings 
// and returns a new list with the strings filtered out.

// my solution 

function filter_list(l) {
	var filterType = l.filter(unit => typeof unit === "number");
 	return filterType;
};

// solution I liked

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
};
