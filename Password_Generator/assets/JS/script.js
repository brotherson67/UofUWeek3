const includeUppercase = document.getElementById('upperCase').checked;
const includeNumbers = document.getElementById('numbers').checked;
const includeSymbols = document.getElementById('symbols').checked;
const charNum = document.getElementById('charNumDiv').value;
const form = document.getElementById("form")

// ARRAYS 
const lowerCaseLetters = ['a', 'b', "c", 'd', 'e', 'f', 'g', 'h', 'i', "j", 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = lowerCaseLetters.map(lowerCaseLetters => lowerCaseLetters.toUpperCase());
const symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', "<", '>', '=', '?', '?', '@', '[', ']', '^', '_', '`', '{', '}'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const symbolsIncluded = includeSymbols.checked;

function generatePassword(numbers, symbols, uppercase, characters) {
    let charArray = lowerCaseLetters;
    if (uppercase) {charArray = charArray.push(upperCaseLetters)};
    if (numbers) {charArray = charArray.push(numbers)};
    if (symbols) {charArray = charArray.concat(symbols)};
    console.log(numbers)
    return charArray
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(includeNumbers, includeSymbols, includeUppercase, charNum);
  var passwordText = document.querySelector("#password");
  console.dir(includeNumbers)
  passwordText.value = password;
};

form.addEventListener("submit", (e) => {
    e.preventDefault()
  });

// Add event listener to generate button
generateBtn.addEventListener("submit", writePassword());