//Heads and legs

function animals(heads, legs){
    // if both number of heads and legs is 0, return empty array
  if (heads == 0 && legs == 0)
    return [0, 0];

    // if either numbers of heads or legs is a negative, return No Solutions  
  if (heads < 0 || legs < 0)
    return 'No solutions';

    // define variable chickens expressed in cows   
  var cows = legs/2 - heads;
  var chickens = heads - cows;
  
    // if no. of chikens OR numbers of cows is less than zero
    // OR if number of chickens OR cows is not a whole number, return No Soutions;
  if (chickens < 0 || cows < 0 || chickens%1 > 0 || cows%1 > 0)
    return 'No solutions';
  
    // other cases: return number of chickens and cows
  return [chickens, cows];
}



 console.log(animals(72, 200));