const includeLowercase = document.getElementById('lowerCase').checked;
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

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(lowerCaseLetters)
})

const generatePassword = (includeLowercase, includeNumbers, includeSymbols, includeUppercase) => {
    let charArray = [...lowerCaseLetters];
    if (includeUppercase) { charArray.push(...upperCaseLetters)}
    if (includeNumbers) { charArray.push(...numbers)}
    if (includeSymbols) { charArray.push(...symbols)}

    

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