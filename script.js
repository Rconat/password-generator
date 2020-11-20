// Assignment Code
var generateBtn = document.querySelector("#generate");

// User prompt for length of password
// User Prompt for types of characters
    // lowercase ?
    // uppercase ?
    // numeric ?
    // special characters ?
// check that at least 1 character type is selected

// Generate the Password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
