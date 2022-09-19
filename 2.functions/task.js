// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let avg;
  let sum = 0;

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] < min) {
      min = arr[k];
    }
    if (arr[k] > max) {
      max = arr[k];
    }
    sum += arr[k];
  }

  avg = (sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: +avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let maxArr;
  let max = -Infinity;

  for (i = 0; i < arrOfArr.length; i++) {
    let length = arrOfArr.length;
    maxArr = func(arrOfArr[i]);
    if (maxArr > max) {
      max = maxArr;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  return Math.abs(getArrayParams(arr).max - getArrayParams(arr).min);
}
