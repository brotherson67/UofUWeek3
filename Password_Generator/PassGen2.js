// Assignment code here

//global variables
let lowerCase = document.getElementById("lowerCase");
let upperCase = document.getElementById("upperCase");
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols");
//range elements
let charNum = document.getElementById("charNum")

// create empty master array
let masterArray = [];

// array for each character set
const lowerArray = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
const upperArray = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
const numberArray = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const symbolArray = [33,34,35, 36, 37, 38, 39, 40, 52, 42, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96];

// need to create slider function
// need to link slider to random number generator character amount
// need to add ASC character translator

//lowerCase function
let lowerBox = function(masterArray){
  for (i = 0; i < lowerArray.length; i++) {
    masterArray.push(lowerArray[i]);
  }
  return masterArray
};

//UpperCase function
let upperBox = function(masterArray){
  for (i = 0; i < upperArray.length; i++) {
    masterArray.push(upperArray[i]);
  }
  return masterArray
};

//numberFunction
let numberBox = function(masterArray){
  for (i = 0; i < numberArray.length; i++) {
    masterArray.push(numberArray[i]);
  }
  return masterArray
};

//Symbols function
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
  if (!lowerCase && !upperCase && !numbers && !symbols) {
    window.alert("You need to choose at least one kind of character for your password!")
  };
};

//create random number generator 
  // link to the sliding bar
let randNum = function(){
  isCheckbox();
  for (i = 0; i < charNum.value; i++) {
    let number = Math.random() * masterArray.length
    number = Math.floor(number);
    console.log(number)
  }
}

randNum();

const generatePassword = function() {
    //pass in character amount
    // pass in master array
    isCheckbox();
    for (i = 0; i < charNum.value; i++) {
      let number = Math.random() * masterArray.length
      number = Math.floor(number);
      console.log(number)
    }
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

