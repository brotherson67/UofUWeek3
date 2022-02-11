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

// ARRAYS
const lowerCaseLetters = ['a', 'b', "c", 'd', 'e', 'f', 'g', 'h', 'i', "j", 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = lowerCaseLetters.map(lowerCaseLetters => lowerCaseLetters.toUpperCase());
const symbolsArray = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', "<", '>', '=', '?', '?', '@', '[', ']', '^', '_', '`', '{', '}'];
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// master Array function


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(e) {
  e.preventDefault();
//   var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(symbols.checked)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);