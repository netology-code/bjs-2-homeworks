// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let avg;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  avg = (sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: +avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let maxArr;
  let max = -Infinity;

  for ( let i = 0; i < arrOfArr.length; i++) {
    maxArr = func(arrOfArr[i]);
    if (maxArr > max) {
      max = maxArr;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  const result = getArrayParams(arr);
  return Math.abs(result.max - result.min);
}
