String cleaning

function stringClean(s){
	var re = /[^0-9]/g;
	var matches = s.match(re);
	if (matches) {
		return matches.join('');
	} else if (!matches) {
		return '';
	}
	else {
		return s;
	}	
}

// Best solution

function stringClean(s){
  return s.replace(/[0-9]/g, '');
}