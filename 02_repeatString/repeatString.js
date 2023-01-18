const repeatString = function(userString, userNum) {
    if (userNum < 0) { return 'ERROR'}
    
    let returnString = '';
    for (let index = 0; index < userNum; index++) {
        returnString = returnString.concat(userString)
    }
    return returnString; 
};

// Do not edit below this line
module.exports = repeatString;
