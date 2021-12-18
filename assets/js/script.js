// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var password = [];

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
function generatePassword (){
  var confirmLength = (window.prompt("How many characters would you like your password to contain?"));
  // loop if outside of parameters  
  while (confirmLength <= 8 || confirmLength >= 128){
  window.alert("Password must be between 8-128 characters, Try Again!");
  var confirmLength = (window.prompt("How many characters would you like your password to contain?"));
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
