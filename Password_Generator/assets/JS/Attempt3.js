let upperCase = document.getElementById("upperCase");
let lowerCase = document.getElementById("lowerCase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate")
const body = document.querySelector("body")

let masterArray = [];

const lowerArray = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
const upperArray = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
const numberArray = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const symbolArray = [33,34,35, 36, 37, 38, 39, 40, 52, 42, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96];

console.dir(upperCase);

let getMasterArray = function(event){
    if (upperCase.checked){
        for (i = 0; i < upperArray.length; i++) {
            masterArray.push(upperArray[i])
        }
        console.log("upperArray Clicked " + masterArray)
    };
    if (lowerCase.checked){
        for (i = 0; i < lowerArray.length; i++) {
            masterArray.push(lowerArray[i])
        }
        console.log("lowerArray Clicked " + masterArray)
    };
    if (numbers.checked){
        for (i = 0; i < numbers.length; i++) {
            masterArray.push(numberArray[i])
        }
        console.log("numberArray Clicked " + masterArray)
    };
    if (symbols.checked){
        for (i = 0; i < symbols.length; i++) {
            masterArray.push(symbolArray[i])
        }
        console.log("symbolArray Clicked " + masterArray)
    }
    console.log(`this is the master array ${masterArray}`);
}

upperCase.addEventListener("click", getMasterArray())


// generateBtn.addEventListener("submit", getMasterArray())


//Current Issue - find way to prevent default when submit is clicked, taht way check boxes can be checked as well
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("submit", writePassword);
