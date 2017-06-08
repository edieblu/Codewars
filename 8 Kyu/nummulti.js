function findMultiples(int,limit){
	var result = [];
	var i = 1;
	while (i * int <= limit){
		result.push(i*int);
		i++;	
	}
	return result;
}

// Best Practice 

function findMultiples(int,limit){
  let result = []
  
  for (let i = int; i<=limit ; i+=int)
    result.push(i)
    
  return result
}