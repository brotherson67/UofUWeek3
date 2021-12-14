let upperCase = document.getElementById("upperCase");
let lowerCase = document.getElementById("lowerCase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
const body = document.querySelector("body")
const charNum = document.getElementById("charNum")



let masterArray = [];

const lowerArray = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
const upperArray = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
const numberArray = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const symbolArray = [33,34,35, 36, 37, 38, 39, 40, 52, 42, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96];

console.dir(upperCase);

// console.dir(upperCase)
// let getMasterArray = function(){
//     if (upperCase.checked){
//         for (i = 0; i < upperArray.length; i++) {
//             masterArray.push(lowerArray[i])
//         }
//         console.log("upperArray Clicked " + masterArray)
//     } else {
//         console.log("you didn't click the uppercase!")
//     }
// }


// this function will return the array of all permitted character numbers
permittedCharacter = () => {
    let characterArray = [];
    //if the uppercase box is checked then add the characters of upperArray
    if (upperCase.checked){
        for(let i = 0; i < upperCase.length; i++){
            characterArray.push(upperArray[i])
        };
    };
    console.log(characterArray + "array1")
    if (lowerCase.checked){
        for(let i = 0; i < upperCase.length; i++){
            characterArray.push(lowerArray[i])
        };
    };
    console.log(characterArray + "array2")
    if (symbols.checked){
        for(let i = 0; i < upperCase.length; i++){
            characterArray.push(symbolsArray[i])
        };
    };
    console.log(characterArray + "array3")
    if (numbers.checked){
        for(let i = 0; i < upperCase.length; i++){
            characterArray.push(numberArray[i])
        };
    };
    console.log(characterArray + "array1")
    return characterArray;
};
console.log(permittedCharacter.length)
// console.log(characterArray.length)

// this function will generate a random character based on the permitted characters from permittedCharacters function 
randomCharacter = permittedCharacter => {
    let newCharNum = Math.random * permittedCharacter.length;
     
}

// this function will return a string of numbers which will be the password
generatePassword = (numberOfCharacters = 1) => {
    // // for now this is a place holder function. It will be used in the writepassword function
    // let password = "";
    // for (let i = 0; i < numberOfCharacters; i++){
    //     // run through the number generating function for i 
    //     // push the new characters into the password using concat()
    // };
    return upperCase.checked;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(e) {
  e.preventDefault
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(typeof writePassword);

//Current Issue - find way to prevent default when submit is clicked, taht way check boxes can be checked as well
// Write password to the #password input

// Add event listener to generate button
// generateBtn.addEventListener("submit", writePassword);
