// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] <  min) {
      min = arr[i];
    }
    sum += arr[i];
    avg = sum/arr.length;
  }
  

  return { min:min, max:max, avg:avg.toFixed(2) };
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
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++)  {
    let sum = func(arrOfArr[i]);
    if (max < sum)
      max = sum;
    }
  return max;
}

