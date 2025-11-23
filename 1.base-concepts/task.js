"use strict"

// ЗАДАЧА №1

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value > max) {
      max = value;
    }

    if (value < min) {
      min = value;
    }

    sum += value;

  }

  let avg = Number((sum / arr.length).toFixed(2));
  
  return {min, max, avg};
}

console.log(getArrayParams(1,2,3))


// ЗАДАЧА №2

function summElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for(let value of arr) {
    sum += value;
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }

  let min = -Infinity;
  let max = Infinity;

  for(let value of arr) {

    if(value > max) {
      max = value;
    }
    
    if(value < min) {
      min = value;
    }

    return max - min;
  }
}

  function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;

    if(arr.length === 0) {
    return 0;
    }

    for(let value of arr) {
      if(value % 2 === 0) {
        sumEvenElement += value;
      } else {
        sumOddElement += value;
      }
    }

    return sumEvenElement - sumOddElement;
  }

  function averageEvenElementsWorker(...arr) {
    let sumEvenElement =0;
    let countEvenElement = 0;

    if(arr.length === 0) {
    return 0;
    }

    for(let value of arr) {
      if(value % 2 === 0) {
        sumEvenElement += value;
        countEvenElement++;
      } 
    }

    if (countEvenElement === 0) {
      return 0;
    }

    return sumEvenElement / countEvenElement;
  }









// ЗАЖАЧА №3