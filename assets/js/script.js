// Assignment code here
var generateBtn = document.querySelector("#generate");

// arrays for password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "{", "}", "[", "]", "|", "`", "?", ">", "<", ";", ":", ".", ",", ];

// variable declaration
var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumericValue;
var confirmSpecialChars;

// confirm how many characters user would like to use
function generateRequirements() {
  var confirmLength = (window.prompt("How many characters would you like your password to contain?"));
  // loop if not enough characters selected 
  if(confirmLength <= 8 || confirmLength >= 128){
  window.alert("Password must be between 8-128 characters, Try Again!");
  var confirmLength = (window.prompt("How many characters would you like your password to contain?"));
  }
// create parameters for password
  var confirmLowerCase = confirm("Click ok to include lowercase characters");
  var confirmUpperCase = confirm("Click ok to include uppercase characters");
  var confirmNumericValue = confirm("Click ok to include numeric characters");
  var confirmSpecialChars = confirm("Click ok to include special characters");
  // loop if outside of parameter
  if(confirmLowerCase === false && confirmUpperCase === false && confirmNumericValue === false && confirmSpecialChars === false) {
    window.alert("You must choose at least one character");
    var confirmLowerCase = confirm("Click ok to include lowercase characters");
    var confirmUpperCase = confirm("Click ok to include uppercase characters");
    var confirmNumericValue = confirm("Click ok to include numeric characters");
    var confirmSpecialChars = confirm("Click ok to include special characters");
  }
  // objects
  var passwordEntries = {
  lowerCase: lowerCase,
  upperCase: upperCase,
  numericValue: numericValue,
  specialChars: specialChars
  };
  return passwordEntries
}

// create strong responses from results
function generatePassword () {
  var passwordOptions = generateRequirements();
  var possibleOutcomes = [];
 
  if(passwordOptions.confirmLowerCase) {
    passwordOptions = passwordOptions.concat(lowerCase);
    possibleOutcomes.push(getRandom(lowerCase))
  }
  if(passwordOptions.confirmUpperCase) {
    passwordOptions = passwordOptions.concat(upperCase);
    possibleOutcomes.push(getRandom(upperCase))
  }
  if(passwordOptions.confirmNumericValue) {
    passwordOptions = passwordOptions.concat(numericValue)
    possibleOutcomes.push(getRandom(numericValue))
  }
  if(passwordOptions.confirmSpecialChars) {
    passwordOptions = passwordOptions.concat(specialChars);
    possibleOutcomes.push(getRandom(specialChars))
  }
  console.log(passwordOptions)

var randomPassword = "";

for(var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
  console.log(randomPassword);
}
return randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
