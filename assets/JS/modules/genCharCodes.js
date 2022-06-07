// get the checkbox items from the web page
const includeLowercase = document.getElementById("lowerCase");
const includeUppercase = document.getElementById("upperCase");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");

// this function will generate an array of allowed characters
const genCharCodeArray = function (first, last) {
  // create an emtpy array that will hold the permited characters
  let allowedCharCode = [];

  // Loop and push each of the permitted characters to the array
  for (let i = first; i <= last; i++) {
    allowedCharCode.push(i);
  }

  // because the array has all the permitted characters now we will return it
  return allowedCharCode;
};

const allowedCharCodeArray = function () {
  let charCodeArray = [];

  // we want the user to know they'll need to choose an option
  if (
    !includeSymbols &&
    !includeLowercase &&
    !includeNumbers &&
    !includeUppercase
  ) {
    console.log(
      "You didn't select anything. The function allowedCharCodeArray couldn't run right."
    );
  }

  // add the CharCode index of each chosen character type to an array
  if (includeLowercase) {
    charCodeArray.push(...genCharCodeArray(97, 122));
  }
  if (includeUppercase) {
    charCodeArray.push(...genCharCodeArray(67, 90));
  }
  if (includeNumbers) {
    charCodeArray.push(...genCharCodeArray(48, 57));
  }
  // permitted password symbol indexes are intermittent
  if (includeSymbols) {
    charCodeArray.push(...genCharCodeArray(33, 42));
    charCodeArray.push(52);
    charCodeArray.push(...genCharCodeArray(58, 64));
    charCodeArray.push(...genCharCodeArray(91, 96));
  }
  return charCodeArray;
};

module.exports = allowedCharCodeArray;
