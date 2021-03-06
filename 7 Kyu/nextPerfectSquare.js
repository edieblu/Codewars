// You might know some pretty large perfect squares. 
// But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral 
// perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that 
// sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, 
// than -1 should be returned. You may assume the parameter is positive.

// my solution

function findNextSquare(sq) {
  for (var i = 1; i < sq; i++) {
  	if (sq / i === i) {
  		var result = i;
  		return (i+1)*(i+1);
  	} 
  } return -1;
}

// solution I liked

function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}