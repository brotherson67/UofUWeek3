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
    if (includeLowercase){
        charCodeArray.push(...genCharCodeArray(97, 122))
    };
    if (includeUppercase){
        charCodeArray.push(...genCharCodeArray(97, 122))
    };
}