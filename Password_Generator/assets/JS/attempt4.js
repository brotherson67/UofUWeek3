// Assignment code here
// Variables
const numOfChar = document.getElementById('charNum');
const uppercase = document.getElementById('upperCase');
const lowercase = document.getElementById('lowerCase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

function dontDoIt(event) {
    event.preventDefault()

    if (charNum < 1 && !uppercase.checked && !lowercase.checked && !numbers.checked && !symbols.checked){
        alert("You need a character amount and type for a password.")
    };
    if (charNum < 1) {
        alert("You have not given an amount of characters for your password.")
    };
    if (!uppercase.checked && !lowercase.checked && !numbers.checked && !symbols.checked){
        alert("You need to select at least one type of character for your password.")
    };
};

if (uppercase.checked) {
    console.log("checked")
}



// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);