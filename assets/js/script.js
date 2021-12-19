// Assignment code here
var generateBtn = document.querySelector("#generate");

// arrays for password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "{", "}", "[", "]", "|", "`", "?", ">", "<", ";", ":", ".", ",", ];

// confirm how many characters user would like to use
function generatePassword() {
  var passwordLength = (window.prompt("How many characters would you like your password to contain?"));
  // loop if not enough characters selected 
  if(passwordLength <= 8 || passwordLength >=  128){
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
  var lowerCase = confirm("Click ok to include lowercase characters");   
  var upperCase = confirm("Click ok to include uppercase characters");    
  var numericValue = confirm("Click ok to include numeric characters");   
  var specialChars = confirm("Click ok to include special characters");
    
  };

  // objects
  var passwordOptions = {
    lowerCase: lowerCase,
    upperCase: upperCase,
    numericValue: numericValue,
    specialChars: specialChars
  };
    return passwordOptions;
}

// create strong responses from results
  var passwordOptions = ['lowerCase', 'upperCase', 'numberValue', 'specialChars'];
  var possibleOutcomes = [];
  var getPassword = ['lowerCase', 'upperCase', 'numberValue', 'specialChars'];
  
  if(passwordOptions.lowerCase) {
    passwordOptions = passwordOptions.concat(lowerCase);
    possibleOutcomes.push(getRandom(lowerCase))
  }
  if(passwordOptions.upperCase) {
    passwordOptions = passwordOptions.concat(upperCase);
    possibleOutcomes.push(getRandom(upperCase))
  }
  if(passwordOptions.numericValue) {
    passwordOptions = passwordOptions.concat(numericValue)
    possibleOutcomes.push(getRandom(numericValue))
  }
  if(passwordOptions.specialChars) {
    passwordOptions = passwordOptions.concat(specialChars);
    possibleOutcomes.push(getRandom(specialChars))
  }
  
  for(var i = 0; i<=passwordOptions.passwordLength; i++) {
    getPassword += possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.passwordLength)];
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);