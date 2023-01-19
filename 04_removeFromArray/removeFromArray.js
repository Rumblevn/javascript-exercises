const removeFromArray = function(PArray, ...PTargets) {
    for (let index = 0; index < PArray.length; index++) {
        for (let jaydex = 0; jaydex < PTargets.length; jaydex++) {
            if (PArray[index] === PTargets[jaydex] ) {
                PArray.splice(index,1);
                index--;
                break;
            }
        }
    }
    return PArray;
};

// Do not edit below this line
module.exports = removeFromArray;
