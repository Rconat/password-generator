// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Global variables
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['#', '$', '%', '&', '(', ')', '*', '+', '<', '-', '.', '/', ':', ';', '<', '=', '>', '?', '!', '@', '[', ']', '`', '~'];

var characterCount;
var characterPool = []
var finalPassword = ''

// on click function
function generatePassword() {
    //check to see if you want to make a new password
    var passPrompt = confirm('Create a new Password?');

  if (passPrompt) {
    //clear the characterPool/finalPassword only after they want to make a new password prompt - this insures password stays if you hit cancel
    characterPool = []
    finalPassword = ''
    writePassword()
    //check how many characters you want to use
    characterCount = parseInt(prompt('Enter a number between 8 and 128'))
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
        // concat the numbers to the characerPool if selected true
        if (includeNumbers === true) {
            characterPool = characterPool.concat(numbers)
        } else {
            console.log('not including numbers')
        }
        // concat the uppercase letters to the characerPool if selected true
        if (includeUppers === true) {
            characterPool = characterPool.concat(uppercase)
        } else {
            console.log('not including uppers')
        }
        // concat the lowercase letters to the characerPool if selected true
        if (includeLowers === true) {
            characterPool = characterPool.concat(lowercase)
        } else {
            console.log('not including lowers')
        }
        // concat the special characters to the characerPool if selected true
        if (includeSpecial === true) {
            characterPool = characterPool.concat(special)
        } else {
            console.log('not including special characters')
        }
        randomPassword()
        // console.log(characterPool)
    } else {
        alert ("Password must be between 8 and 128 characters")
    }
    writePassword()
  } else {
      return
  }
  console.log(finalPassword)
}


//function to get random password
function randomPassword() {
    for (var i = 0; i < characterCount; i++) {
        finalPassword += characterPool[Math.floor(Math.random(i) * characterPool.length)]
    }
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
}