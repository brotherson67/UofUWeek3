//assign elements to vairiables

// prevent default action of refresh upon submit
//add arrays
// get the value of the checkboxes 
// create function that will concatonate all of the selected arrays
// instantiate that function in the form of a variable
// greate generate password function that will 
    // loop throught the array and pick a number at the index at a random spot
    // add taht index to a new array
    // turn that new array into a string and return it

const lowercase = document.getElementById('lowerCase');    // the lowercase checkbox element
const upperCase = document.getElementById('upperCase');    // the uppercase checkbox element
const numbers = document.getElementById('numbers');        // the numbers checkbox element
const symbols = document.getElementById('symbols');        // the symbols checkbox element
const charNum = document.getElementById('charNumDiv');     // the number of characters element
const form = document.getElementById("form")               // this represents the entire form, may use for prevent default


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);