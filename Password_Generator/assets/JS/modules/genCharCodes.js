// I need to generate random characters that been select by checking the boxes
// create a funciton that fills an array based on the selected buttons

const randomName = function(first, last) {
    const allowedCharCode = [];
    for (let i = first; i <= last; i++){
        allowedCharCode.push(i);
    }
    return allowedCharCode;
};