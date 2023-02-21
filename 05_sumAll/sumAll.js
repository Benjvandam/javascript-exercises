const sumAll = function(number1, number2) {

    if (number1 > number2){
        let x = number2;
        number2 = number1;
        number1 = x;
    }

    let sum = number2;
    for (let i = number1; i < number2; i++){

        sum += i;

    }

    if (number1 < 0 || number2 < 0 || typeof number1 != "number" || typeof number2 != "number"){
        sum = 'ERROR';
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
