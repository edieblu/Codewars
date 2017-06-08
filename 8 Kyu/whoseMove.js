// Simple Fun #261: Whose Move

function whoseMove(lastPlayer, win) {
	if (lastPlayer === "white"){
		if (win === true){
			return "white";
		}
		return "black"
	} else if (lastPlayer === "black"){
		if (win === true) {
			return "black";
		}
		return "white";
	}
  
}

console.log(whoseMove("black", false));

// Best solution

function whoseMove(lastPlayer, win) {
  return win?lastPlayer:lastPlayer=="white"?"black":"white"
}