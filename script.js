// Assignment Code
var generateBtn = document.querySelector("#generate");

// Universal variables
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['#', '$', '%', '&', '(', ')', '*', '+', '<', '-', '.', '/', ':', ';', '<', '=', '>', '?', '!', '@', '[', ']'];

// User confirms they would like to make a new password

function startPrompt() {
  var passPrompt = confirm('Create a new Password?');

  if (passPrompt) {
    var characterCount = parseInt(prompt('Enter a number between 8 and 128'))
    // User prompt for length of password
    if (characterCount >= 8 && characterCount <= 128) {
      var finalPass = []

      // User Prompt for types of characters
      // special characters ?
      var includeSpecial = confirm('Include special characters?')
      // numeric ?
      var includeNumbers = confirm('Include numbers?')
      // uppercase ?
      var includeUppers = confirm('Include uppercase numbers?')
      // lowercase ?
      var includeLowers = confirm('Include lowercase numbers?')

      // check that at least 1 character type is selected
      if (includeNumbers) {
        for (var i = 0; numbers.length; i++)
        finalPass.push(numbers[i])
      }

      if (includeSpecial) {
        for (var i = 0; special.length; i++)
        finalPass.push(special[i])
      }

      if (includeLowers) {
        for (var i = 0; lowercase.length; i++)
        finalPass.push(lowercase[i])
      }

      if (includeUppers) {
        for (var i = 0; uppsercase.length; i++)
        finalPass.push(uppercase[i])
      } 
      else {
        alert('Password must have at least 1 character type')
        return
        }

    var flattenedFinalPass = finalPass.flat()
    var password = ''
    password = finalPass.flat

    generatePassword()
    return password

    } else {
      alert('Password must be between 8 and 128 characters')
      return
    }
  } else {
    return
  }
}

// Generate the Password
function generatePassword() {
  for (var i = 0; i < characterCount; i++) {
    var randomIdx = Math.floor(Math.random() * flattenedFinalPass.length)
    var randomCharacters = flattenedFinalPass[randomIdx]
    password += randomCharacters
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", startPrompt);