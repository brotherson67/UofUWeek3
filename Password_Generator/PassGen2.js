// Assignment code here

//global variables
let lowerCase = document.getElementById("lowerCase");
let upperCase = document.getElementById("upperCase");
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols");

//function to call html range chooser

// create empty master array
let masterArray = [];

// array for each character set
const lowerArray = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
const upperArray = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
const numberArray = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const symbolArray = [33,34,35, 36, 37, 38, 39, 40, 52, 42, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96];

// create a function linked to the checkboxes

// Check to see if if funciton prints master array with the elements of lowerArray.
let lowerBox = function(masterArray){
  for (i = 0; i < lowerArray.length; i++) {
    masterArray.push(lowerArray[i]);
  }
  return masterArray
};

// Check to see if if funciton prints master array with the elements of UpperArray.
let upperBox = function(masterArray){
  for (i = 0; i < upperArray.length; i++) {
    masterArray.push(upperArray[i]);
  }
  return masterArray
};

// Check to see if if funciton prints master array with the elements of numberArray.
let numberBox = function(masterArray){
  for (i = 0; i < numberArray.length; i++) {
    masterArray.push(numberArray[i]);
  }
  return masterArray
};

// Check to see if if funciton prints master array with the elements of symbolArray.
let symbolBox= function(masterArray){
  for (i = 0; i < symbolArray.length; i++) {
    masterArray.push(symbolArray[i]);
  }
  return masterArray
};


// function to let checkboxes be checked
let isCheckbox = function() {

  //if boxes are checked
  if (lowerCase){
    lowerBox(masterArray)
  };
  if (upperCase) {
    upperBox(masterArray)
  };
  if (numbers) {
    numberBox(masterArray)
  };
  if (symbols) {
    symbolBox(masterArray)
  };
  if (!lowerCase.checked && !upperCase.checked && !numbers.checked && !symbols.checked) {
    window.alert("You need to choose at least one kind of character for your password!")
  };
  console.log("if statement test")
  console.log(masterArray)
};

//create random number generator 

const generatePassword = function() {
    //pass in character amount
    // pass in master array

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
generateBtn.addEventListener("submit", writePassword);