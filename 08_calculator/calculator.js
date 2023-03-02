const add = function(a,b) {

  return a + b;
	
};

const subtract = function(a,b) {

  return a - b;
	
};

const sum = function(a) {

  let total = 0;

  for (let i = 0; i < a.length; i++){
    total = total + a[i];
  }

  return total;
	
};

const multiply = function(numbers) {

  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
};

const power = function(a,b) {

  return a ** b;
	
};

const factorial = function(a) {

  let total = a;
  if (a == 0){
    total = 1;
  }

  while (a > 1){

    total = total * (a - 1)
    a = a - 1;
  }

  return total;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
