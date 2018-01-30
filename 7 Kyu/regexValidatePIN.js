// ATM machines allow 4 or 6 digit PIN codes and 
// PIN codes cannot contain anything but exactly 4 
// digits or exactly 6 digits.

// If the function is passed a valid PIN string, r
// eturn true, else return false.

// my solution

function validatePIN (pin) {
  return pin.match(/^[0-9]{4}$/g) || pin.match(/^[0-9]{6}$/g) ? true:false;

}

// solution I liked

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

