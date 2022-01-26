const includeLowercase = document.getElementById('lowerCase');
const includeUppercase = document.getElementById('upperCase');
const includeNumbers = document.getElementById('numbers');
const includeSymbols = document.getElementById('symbols');
const charNum = document.getElementById('charNumDiv');

// ARRAYS 
const lowerCaseLetters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
const upperCaseLetters = lowerCaseLetters.map(lowerCaseLetters => lowerCaseLetters.toUpperCase());
const symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', "<", '>', '=', '?', '?', '@', '[', ']', '^', '_', '`', '{', '}'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



const allowedCharCodeArray = function() {
    let charCodeArray = [];
    if (!includeSymbols.checked && !includeLowercase.checked && !includeNumbers.checked && !includeUppercase.checked){
        console.log("You didn't select anything. The function allowedCharCodeArray couldn't run right.")
    }
    if (includeLowercase.checked){
        charCodeArray = charCodeArray.concat(...lowerCaseLetters)
    };
    if (includeUppercase.checked){
        charCodeArray = charCodeArray.concat(...upperCaseLetters)
    };
    if (includeNumbers.checked){
        charCodeArray = charCodeArray.concat(...numbers)
    };
    if (includeSymbols.checked){
        charCodeArray = charCodeArray.concat(...symbols)
    };
    return charCodeArray
};


const generatePassword = (event) => {
    // event.preventdefault();
    console.log(translateArray(genCharCodeArray()));
    return allowedCharCodeArray()
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
generateBtn.addEventListener("click", writePassword);