const reverseString = function(userString) {
    let StrArray = userString.split("");
    StrArray = StrArray.reverse();
    let reString = StrArray.join("");
    return reString;
};

// Do not edit below this line
module.exports = reverseString;
