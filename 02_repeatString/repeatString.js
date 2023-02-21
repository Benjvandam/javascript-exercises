const repeatString = function(string,num) {
    
    if (string == ''){
        return '';
    }

    if (num < 0){
        return 'ERROR';
    }

    let returnString = "";
    for (let i=0; i < num; i++){
        returnString = returnString + string;
    }

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
