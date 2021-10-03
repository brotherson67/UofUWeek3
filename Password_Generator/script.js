// Assignment code here


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
*/