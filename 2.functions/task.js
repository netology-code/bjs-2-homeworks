// Задание 1
function getArrayParams(arr) {

  var len = arr.length;
  min = Infinity;
  while (len--) {
    if (Number(arr[len]) < min) {
      min = Number(arr[len]);
    }
  };

  var len = arr.length;
  max = -Infinity;

  while (len--) {
    if (Number(arr[len]) > max) {
      max = Number(arr[len]);
    }
  };

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return {
    min: min,
    max: max,
    avg: avg
  };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}