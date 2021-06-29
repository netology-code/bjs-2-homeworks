"use strict";

// Задание 1
function getArrayParams(arr) {
  let min = arr[0],
      max = arr[0],
      sum = 0,
      i,
      avg;

  // Ваш код
  for(i = 0; i < arr.length; i+= 1) {
    max = (arr[i] > max) ? arr[i] : max;
    min = (arr[i] < min) ? arr[i] : min; 
    sum+= arr[i]; 
  }

  avg = sum / arr.length;
  avg = avg.toFixed(2);

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0, i;

  // Ваш код
  for(i = 0; i < arr.length; i+= 1) {
    sum+= arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0,
      checkMeet,
      i;

  // Ваш кода
  // for ...
  for(i = 0; i < arrOfArr.length; i+= 1) {
    checkMeet = func(arrOfArr[i]);
    max = (checkMeet > max) ? checkMeet : max;
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let max = Math.abs(arr[0]),
      min = Math.abs(arr[0]),
      result,
      i;

  // Ваш код
  for(i = 0; i < arr.length; i+= 1) {
    max = (Math.abs(arr[i]) > max) ? Math.abs(arr[i]) : max;
    min = (Math.abs(arr[i]) < min) ? Math.abs(arr[i]) : min; 
  }
  result = max - min;
  return result;
}
