// Задание 1
function getArrayParams(arr) {
  let min = arr[0],
      max = -Infinity,
      sum = Number(0),
      avg;

  for (let i = 0; i < arr.length; i += 1) {

    if (arr[i] > max) {
      max = arr[i] ;

    } else if (arr[i] <= min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  avg = (sum / arr.length).toFixed(2);

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1){
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i += 1) {

    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }

  return max
}


// Задание 3
function worker2(arr) {
  let max = -Infinity,
      min = arr[0];

  for (let i = 0; i < arr.length; i += 1) {

    if (arr[i] > max) {

      max = arr[i];

    } else if (arr[i] <= min) {

      min = arr[i];
    }

  }

  return (max - min);
}