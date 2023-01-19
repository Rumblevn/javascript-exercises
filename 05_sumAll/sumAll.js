const sumAll = function(PBegin, PEnd) {
    if (PBegin < 0 || PEnd < 0 ||
        typeof PBegin !== 'number' || typeof PEnd !== 'number' ) {
        return 'ERROR'
    } 
    let sum = 0;

    if (PBegin > PEnd) {
        const temp = PBegin;
        PBegin = PEnd;
        PEnd = temp;
    }

    for (let index = PBegin; index <= PEnd; index++) {
        sum += index;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
