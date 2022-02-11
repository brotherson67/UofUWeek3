const includeLowercase = document.getElementById('lowerCase');
const includeUppercase = document.getElementById('upperCase');
const includeNumbers = document.getElementById('numbers');
const includeSymbols = document.getElementById('symbols');
const charNum = document.getElementById('charNumDiv').value;
const form = document.getElementById("form")

// ARRAYS 
const lowerCaseLetters = ['a', 'b', "c", 'd', 'e', 'f', 'g', 'h', 'i', "j", 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = lowerCaseLetters.map(lowerCaseLetters => lowerCaseLetters.toUpperCase());
const symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', "<", '>', '=', '?', '?', '@', '[', ']', '^', '_', '`', '{', '}'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const symbolsIncluded = includeSymbols.checked;


function generatePassword(includeNumbers, includeSymbols, includeUppercase, charNum) {
    let charArray = lowerCaseLetters;
    if (includeUppercase.checked) {charArray = charArray.push(upperCaseLetters)};
    if (includeNumbers.checked) {charArray = charArray.push(numbers)};
    if (includeSymbols.checked) {charArray = charArray.concat(symbols)};

    return charArray
}


// form.addEventListener("submit", (e) => {
//     e.preventDefault()


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(e) {
    e.preventDefault()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    console.log(generatePassword())
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);