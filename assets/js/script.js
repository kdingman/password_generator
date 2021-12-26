// Assignment code here
var generateBtn = document.querySelector("#generate");

// arrays for password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
<<<<<<< HEAD
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "{", "}", "[", "]", "|", "`", "?", ">", "<", ";", ":", ".", ",",];

// variables defined
var confirmLowerCase = lowerCase;
var confirmUpperCase = upperCase;
var confirmNumericValue = numericValue;
var confirmSpecialChars = specialChars;
=======
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "{", "}", "[", "]", "|", "`", "?", ">", "<", ";", ":", ".", ",", ];


// variable defined
var confirmLowerCase = lowerCase;
var confirmUpperCase = upperCase;
var confirmNumericValue = numericValue;
var confirmSpecialChars = specialChars
>>>>>>> develop
var passwordLength = "";

// confirm how many characters user would like to use
function askQuestions() {
<<<<<<< HEAD
// create parameters for password
=======
  var passwordLength = (window.prompt("How many characters would you like your password to contain?"));
  // loop if not enough characters selected 
  if(passwordLength < 8 || passwordLength > 128) {
  window.alert("Password must be between 8-128 characters, Try Again!");
>>>>>>> develop
  var passwordLength = (window.prompt("How many characters would you like your password to contain?"));
      // loop if not enough characters selected 
      if(passwordLength < 8 || passwordLength > 128) {
        window.alert("Password must be between 8-128 characters, Try Again!");
    var passwordLength = (window.prompt("How many characters would you like your password to contain?"));
      }

  var confirmLowerCase = confirm("Click ok to include lowercase characters");
  var confirmUpperCase = confirm("Click ok to include uppercase characters");  
  var confirmNumericValue = confirm("Click ok to include numeric characters");    
  var confirmSpecialChars = confirm("Click ok to include special characters");
  var responses = {
    confirmLowerCase: confirmLowerCase,
    confirmUpperCase: confirmUpperCase,
    confirmNumericValue: confirmNumericValue,
    confirmSpecialChars: confirmSpecialChars,
    passwordLength: passwordLength
   }

    // loop if outside of parameter
    if(confirmLowerCase === false && confirmUpperCase === false && confirmNumericValue === false && confirmSpecialChars === false) {
      window.alert("You must select at least one character type, Try Again.")
  var confirmLowerCase = confirm("Click ok to include lowercase characters");   
  var confirmUpperCase = confirm("Click ok to include uppercase characters");    
  var confirmNumericValue = confirm("Click ok to include numeric characters");   
  var confirmSpecialChars = confirm("Click ok to include special characters");
    }
    return responses;
  }

<<<<<<< HEAD
  // create strong responses from results
  var passwordSelections = askQuestions();
  var possibleOutcomes = [];
  var getPassword = "";

function generatePassword() {

    if(passwordSelections.confirmLowerCase) {
      for (var i of lowerCase)
        possibleOutcomes.push(i);
    }

    if(passwordSelections.confirmUpperCase) {
      for (var i of upperCase)
        possibleOutcomes.push(i);
    }

    if(passwordSelections.confirmNumericValue) {
      for (var i of numericValue)
        possibleOutcomes.push(i);
    }

    if(passwordSelections.confirmSpecialChars) {
      for (var i of specialChars)
        possibleOutcomes.push(i);
    }

    for (var i = 0; i < passwordSelections.passwordLength; i++) {
        getPassword += possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
      }
      return getPassword;

}
=======
// create parameters for password
  var confirmLowerCase = confirm("Click ok to include lowercase characters");
  var confirmUpperCase = confirm("Click ok to include uppercase characters");  
  var confirmNumericValue = confirm("Click ok to include numeric characters");    
  var confirmSpecialChars = confirm("Click ok to include special characters");
  var responses = {
    confirmLowerCase: confirmLowerCase,
    confirmUpperCase: confirmUpperCase,
    confirmNumericValue: confirmNumericValue,
    confirmSpecialChars: confirmSpecialChars,
    passwordLength: passwordLength
  }
  // loop if outside of parameter
  if(confirmLowerCase === false && confirmUpperCase === false && confirmNumericValue === false && confirmSpecialChars === false) {
    window.alert("You must select at least one character type, Try Again.")
  var confirmLowerCase = confirm("Click ok to include lowercase characters");   
  var confirmUpperCase = confirm("Click ok to include uppercase characters");    
  var confirmNumericValue = confirm("Click ok to include numeric characters");   
  var confirmSpecialChars = confirm("Click ok to include special characters");
  }
    return responses;
}

// create strong responses from results
var passwordSelections = questions();
var possibleOutcomes = [];
var getPassword = "";

function generatePassword() {

  
  if(passwordSelections.confirmLowerCase) {
    for(var i of lowerCase)
    possibleOutcomes.push(i);
  }
  if(passwordSelections.confirmUpperCase) {
    for(var i of upperCase)
    possibleOutcomes.push(i);
  }
  if(passwordSelections.confirmNumericValue) {
    for(var i of numericValue)
    possibleOutcomes.push(i);
  }
  if(passwordSelections.confirmSpecialChars) {
    for(var i of specialChars)
    possibleOutcomes.push(i);
  }
  
  for (var i = 0; i < passwordSelections.passwordLength; i++) {
    getPassword += possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
  }
    return getPassword;
};
>>>>>>> develop

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);