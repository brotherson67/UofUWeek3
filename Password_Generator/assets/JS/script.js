const includeLowercase = document.getElementById('lowerCase');
const includeUppercase = document.getElementById('upperCase');
const includeNumbers = document.getElementById('numbers');
const includeSymbols = document.getElementById('symbols');


// this function will generate an array of allowed characters 
const genCharCodeArray = function(first, last) {
    let allowedCharCode = [];
    for (let i = first; i <= last; i++){
        allowedCharCode.push(i);
    }
    return allowedCharCode;
};

// TESTS
// let testVar = [];
// testVar.push(...genCharCodeArray(97, 122));
// console.log(testVar[0])
// for each checkbox selected, a first and last character will be passed through. The array will be concatonated to another array

const allowedCharCodeArray = function() {
    let charCodeArray = [];
    if (!includeSymbols.checked && !includeLowercase.checked && !includeNumbers.checked && !includeUppercase.checked){
        console.log("You didn't select anything. The function allowedCharCodeArray couldn't run right.")
    }
    if (includeLowercase.checked){
        charCodeArray.push(...genCharCodeArray(97, 122))
    };
    if (includeUppercase.checked){
        charCodeArray.push(...genCharCodeArray(67, 90))
    };
    if (includeNumbers.checked){
        charCodeArray.push(...genCharCodeArray(48, 57))
    };
    if (includeSymbols.checked){
        charCodeArray.push(...genCharCodeArray(33, 42))
        charCodeArray.push(52)
        charCodeArray.push(...genCharCodeArray(58, 64))
        charCodeArray.push(...genCharCodeArray(91, 96))
    };
    return charCodeArray
};

// Constants
const charNum = document.getElementById('charNumDiv');


const generatePassword = (event) => {
    // event.preventdefault();
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