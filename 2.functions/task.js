'use strict';
// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = arr[0];
  for (let index = 1; index < arr.length; index += 1) {
    if (min > arr[index]) {
      min = arr[index];
    }
    if (max < arr[index]) {
      max = arr[index];
    }
    sum += arr[index];
  }
  avg = +(sum / arr.length).toFixed(2);
  return {
    min: min,
    max: max,
    avg: avg
  };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let value of arr) {
    sum += value;
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let sum;
  for (let value of arrOfArr) {
    sum = func(value);
    if (max < sum) {
      max = sum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, diff;
  min = arr[0];
  max = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  diff = max - min;
  return diff;
}

