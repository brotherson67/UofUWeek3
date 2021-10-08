// Assignment code here

//function to call html range chooser

// create empty master array

// create arrays for each of the character sets

// create a function linked to the checkboxes

//create random number generator 

const generatePassword = function() {
    //pass in character amount
    // pass in master array

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("submit", writePassword);