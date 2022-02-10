const includeLowercase = document.getElementById('lowerCase').checked;
const includeUppercase = document.getElementById('upperCase').checked;
const includeNumbers = document.getElementById('numbers').checked;
const includeSymbols = document.getElementById('symbols').checked;
const charNum = document.getElementById('charNumDiv').value;

// ARRAYS 
const lowerCaseLetters = ['a', 'b', "c", 'd', 'e', 'f', 'g', 'h', 'i', "j", 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = lowerCaseLetters.map(lowerCaseLetters => lowerCaseLetters.toUpperCase());
const symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', "<", '>', '=', '?', '?', '@', '[', ']', '^', '_', '`', '{', '}'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



const allowedCharCodeArray = function() {    // if an item is checked the corresponding characters are added to an array
    let charCodeArray = [];
    if (!includeSymbols.checked && !includeLowercase.checked && !includeNumbers.checked && !includeUppercase.checked){
        console.log("You didn't select anything. The function allowedCharCodeArray couldn't run right.")
    }
    if (includeLowercase){
        charCodeArray = charCodeArray.concat(...lowerCaseLetters)
    };
    if (includeUppercase){
        charCodeArray = charCodeArray.concat(...upperCaseLetters)
    };
    if (includeNumbers){
        charCodeArray = charCodeArray.concat(...numbers)
    };
    if (includeSymbols){
        charCodeArray = charCodeArray.concat(...symbols)
    };
    return charCodeArray
};

const generatePassword = () => {
    const charArray = allowedCharCodeArray();
    const password = [];
    for (let i = 0; i < charArray.length; i++) {    // this will add a random number to 
        password.push(Math.floor(i * charNum))
    }


    
    return password
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