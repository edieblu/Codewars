// In a small town the population is p0 = 1000 at the beginning of a year. 
// The population regularly increases by 2 percent per year and moreover 
// 50 new inhabitants per year come to live in the town. 
// How many years does the town need to see its population 
// greater or equal to p = 1200 inhabitants?

// my solution

function nbYear(p0, percent, aug, p) {
    // your code
    var percentage = (1+(percent/100));
    var total = Math.round(p0*percentage+aug);
    for (var i = 1; i <= p; i++) {
    	while (total < p) {
    		total = Math.round(total*percentage+aug);
    		i++;
    	} return i;
	};
}

// solution I liked
function nbYear(p0, percent, aug, p) {
  for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
  return y;
}