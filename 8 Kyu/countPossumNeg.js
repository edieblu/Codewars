// Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
	// store results in array input[0] = counter, input[1] = sum
	var results = [0, 0];
	// if not null or empty
	if (input != null && input.length > 0) {

	    for (var i = 0; i < input.length; i++) {
	        	if (input[i] > 0) {
	        		// increment the counter
	        		results[0]++;
	        	} else {
	        		// add to sum
	        		results[1]+= input[i];
	        	}
	        }
	        return results;
    } else {
    	// if null or empty return empty array
    	results = [];
    	return results
    }
}

// Best solution

	function countPositivesSumNegatives(input) {
	    if (input == null || input.length == 0)
	      return [];
	    
	    var positive = 0;
	    var negative = 0;
	    
	    for (var i=0, l=input.length; i<l; ++i)
	    {
	      if (input[i] > 0)
	        ++ positive;
	      else
	        negative += input[i];
	    }
	    
	    return [positive, negative];
	}