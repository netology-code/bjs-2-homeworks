"use strict";

// Задание 1
function getArrayParams(arr) {
  if (arr.length == 0) {
    return 0;
  }
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }

  }
  let avg = sum / arr.length;
  avg = +avg.toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }


  return max;
}

// Задание 3
function worker2(arr) {
  let diff = 0;
  let arrMin = arr[0];
  let arrMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]<arrMin){
      arrMin = arr[i];
    }
    if (arr[i]>arrMax){
      arrMax=arr[i];
    }
  }
  diff = Math.abs (arrMax-arrMin);
  return diff;
}
