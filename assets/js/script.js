// Assignment code here
var generateBtn = document.querySelector("#generate");

// arrays for password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "{", "}", "[", "]", "|", "`", "?", ">", "<", ";", ":", ".", ",", ];
var passwordLength = " <= 8 || >=128 ";

// confirm how many characters user would like to use
function questions() {
  var passwordLength = (window.prompt("How many characters would you like your password to contain?"));
  // loop if not enough characters selected 
  if(passwordLength < 8 || passwordLength > 128) {
  window.alert("Password must be between 8-128 characters, Try Again!");
  var passwordLength = (window.prompt("How many characters would you like your password to contain?"));
  }

// create parameters for password
  var lowerCase = confirm("Click ok to include lowercase characters");
  var upperCase = confirm("Click ok to include uppercase characters");  
  var numericValue = confirm("Click ok to include numeric characters");    
  var specialChars = confirm("Click ok to include special characters");
 
  // loop if outside of parameter
  if(lowerCase === false && upperCase === false && numericValue === false && specialChars === false) {
    window.alert("You must select at least one character type, Try Again.")
  var lowerCase = confirm("Click ok to include lowercase characters");   
  var upperCase = confirm("Click ok to include uppercase characters");    
  var numericValue = confirm("Click ok to include numeric characters");   
  var specialChars = confirm("Click ok to include special characters");
  };

  // objects
  var responses = {
    lowerCase: lowerCase,
    upperCase: upperCase,
    numericValue: numericValue,
    specialChars: specialChars,
    passwordLength: passwordLength
  };
    return responses;
}

// create strong responses from results
function generatePassword() {
  var passwordSelections = questions();
  var possibleOutcomes = [];
  var getPassword = "";
  
  if(passwordSelections.lowerCase) {
    for(var i of lowerCase)
    possibleOutcomes.push(i);
  }

  if(passwordSelections.upperCase) {
    for(var i of upperCase)
    possibleOutcomes.push(i);
  }
  if(passwordSelections.numericValue) {
    for(var i of numericValue)
    possibleOutcomes.push(i);
  }
  if(passwordSelections.specialChars) {
    for(var i of specialChars)
    possibleOutcomes.push(i);
  }
  
  for (var i = 0; i < passwordSelections.passwordLength; i++) {
    getPassword += possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.passwordLength)];
  }
    return getPassword;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);