// Assignment code here

//function to create password length prompt
let passLength = function() {
    const charNum = window.prompt("Please enter the desired length of you password (req. 8 - 128 characters).");
    if (charNum < 8) {
        window.alert("Your password was too short, please try again");
    } else if (charNum > 128) {
        window.alert("Your password is too long, please try again");
    // } else if ((typeof charNum) !== ) {
    //     window.alert("You entered an invalid input, please try again");
    } else {
        console.log(charNum);  //number of times loop will happen
    }
};

//function to enable lowercase
let lowerIncluded = function() {
    const included = window.prompt("Do you want lowercase letters included? (Y/N).");
    if (included === "y" || included === "Y" || included === "YES" || included === "yes") {
        console.log(true);
    } else {
        console.log(false);
    }
};

// function to enable uppercase
let upperIncluded = function() {
    const included = window.prompt("Do you want uppercase letters included? (Y/N).");
    if (included === "y" || included === "Y" || included === "YES" || included === "yes") {
        console.log(true);
    } else {
        console.log(false);
    }
};

//function to enable symbols
let symbolsIncluded = function() {
    const included = window.prompt("Do you want special characters included? (Y/N).");
    if (included === "y" || included === "Y" || included === "YES" || included === "yes") {
        console.log(true);
    } else {
        console.log(false);
    }
};

//function to enable numbers
let numbersIncluded = function() {
    const included = window.prompt("Do you want numbers to be included? (Y/N).");
    if (included === "y" || included === "Y" || included === "YES" || included === "yes") {
        console.log(true);
    } else {
        console.log(false);
    }
};



// number generator 
let genNumber = function() {
    const initNumber = Math.random;
    const multipyNumber = initNumber * //array - make array now;
}

let generatePassword = function() {
    passLength();
    lowerIncluded();
    upperIncluded();
    symbolsIncluded();
    numbersIncluded();
};



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



/*
When I select the 'Generate Password" button 
  Prompts appear
    prompt for password criteria
      length (8 <= x <= 128) - slide box? or input
      character symbols - checkbox
      cheracter numbers - checkbox
      character lowercase - checkbox
      character capitals - checkbox
  at least one box needs to be checked\
  prompts need to be answered 
    (could these be criteria in divs?)
  Password is generated to an alert or to the page itself
    put it in an alert first to get it done
    after that mess with the page to get it to display in place of the 'your secure password'


    to generate the password I can use ASC symbols

*/

