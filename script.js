// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Global variables
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['#', '$', '%', '&', '(', ')', '*', '+', '<', '-', '.', '/', ':', ';', '<', '=', '>', '?', '!', '@', '[', ']'];

var finalPassArray = []
var finalPassword = ''

var includeNumbers
var includeUpper
var includeLower
var includeSpecial

var randomNumbers
var randomUppercase
var randomLowercase
var randomSpecial

// on click function
function generatePassword() {
    //check to see if you want to make a new password
    var passPrompt = confirm('Create a new Password?');

  if (passPrompt) {
    //check how many characters you want to use
    var characterCount = parseInt(prompt('Enter a number between 8 and 128'))
    console.log('the character count is ' + characterCount)
    //check number of characters is the right amount
    if (characterCount >= 8 && characterCount <= 128) {
        // User Prompt for types of characters
         // numeric ?
        var includeNumbers = confirm('Include numbers?')
        // special characters ?
        var includeSpecial = confirm('Include special characters?')
        // uppercase ?
        var includeUppers = confirm('Include uppercase numbers?')
        // lowercase ?
        var includeLowers = confirm('Include lowercase numbers?')
       
        // If no character types are selected - alert that you must choose at lease one
        while (!(includeNumbers || includeSpecial || includeUppers || includeLowers)) {
            alert("You must select at least one character type");
            return
        }

        if (includeNumbers === true) {
            console.log('including numbers')
        } else {
            console.log('not including numbers')
        }

        if (includeSpecial === true) {
            console.log('including special characters')
        } else {
            console.log('not including special characters')
        }

        if (includeUppers === true) {
            console.log('including uppers')
        } else {
            console.log('not including uppers')
        }

        if (includeLowers === true) {
            console.log('including lowers')
        } else {
            console.log('not including lowers')
        }

    } else {
        alert ("Password must be between 8 and 128 characters")
    }
  } else {
      return
  }
}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }