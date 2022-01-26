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
    if (!includeSymbols && !includeLowercase && !includeNumbers && !includeUppercase){
        console.log("You didn't select anything. The function allowedCharCodeArray couldn't run right.")
    }
    if (includeLowercase){
        charCodeArray.push(...genCharCodeArray(97, 122))
    };
    if (includeUppercase){
        charCodeArray.push(...genCharCodeArray(67, 90))
    };
    if (includeNumbers){
        charCodeArray.push(...genCharCodeArray(48, 57))
    };
    if (includeSymbols){
        charCodeArray.push(...genCharCodeArray(33, 42))
        charCodeArray.push(52)
        charCodeArray.push(...genCharCodeArray(58, 64))
        charCodeArray.push(...genCharCodeArray(91, 96))
    };
    return charCodeArray
};


module.exports = allowedCharCodeArray;