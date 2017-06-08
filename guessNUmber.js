// Solution
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  guess(n) {
    if(this.lives < 1) throw "Too many guesses!";
    if(this.number == n) return true;
    this.lives--;
    return false;
  }
}
