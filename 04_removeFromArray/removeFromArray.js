const removeFromArray = function(inputArray, ...toRemoveArray) {

    // For each of the elements in inputArray
        // For each of the elements in the toRemoveArray
            // If there is a match, continue to the next element
        //Add the element to the removedArray
    let removedArray = [];

    outerArray:
    for (input of inputArray){
        console.log(`input: ${input}`)
        for (remove of toRemoveArray){
            console.log(`remove: ${input}`)
            if (input === remove){
                console.log(`input equals remove.`)
                continue outerArray;
            }
        }
        removedArray.push(input);
        console.log(removedArray)
    }
    

    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
