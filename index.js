const Calculate = {
  sum(inputArray) {
    if(inputArray.length === 0){
      return 0
    }
    return inputArray.reduce((sum, value) => {
      return sum + value;
    })
  },

  factorial(inputNumber) {
    if (inputNumber === 0) {
      return 1;
    }
    for (let iteration = inputNumber - 1; iteration >= 1; iteration--) {
      inputNumber = inputNumber * iteration;
    }

    return inputNumber;
  },

  add(inputOne, inputTwo) {
    return inputOne + inputTwo;
  },

  subtract(inputOne, inputTwo) {
    return inputOne - inputTwo;
  },

  multiply(inputOne, inputTwo) {
    return inputOne * inputTwo;
  },

  divide(dividend, divisor) {
    if(divisor === 0) {
      throw new Error('the quotient of a number and 0 is undefined');
    } else {
      return dividend / divisor;
    }
  },

  absoluteValue(input) {
    if(input < 0) {
      return -input;
    } else {
      return input;
    }
  },

  exponential(base,power) {
    let result =1;
    for( let i = 0; i < power; i++) {
      result *= base;
    }
    return result;
  },

  max(array) {
    const arrayLength = array.length;
    if (arrayLength===0) {
      throw new Error;
    }
    let maxVal = array[0];
    for (let i = 1; i < arrayLength; i++) {
      if (array[i] > maxVal) {
        maxVal = array[i];
      }
    }
    return maxVal;
  },

  min(array) {
    const arrayLength = array.length;
    if (arrayLength === 0) {
      throw  new Error;
    }
    let minVal = array[0];
    for(let i=1; i <arrayLength; i++) {
      if( array[i]< minVal) {
        minVal = array[i];
      }
    }
    return minVal;
  },

  average(array) {
    if(array.length === 0) {
      return 0;
    } else {
      const sum = array.reduce((x, y) => {
        return x + y;
      });
      return sum/array.length;
    }

  }
}





module.exports = Calculate;
