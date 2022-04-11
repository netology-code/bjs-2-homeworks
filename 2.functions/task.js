// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    };
    if (min > arr[i]) {
      min = arr[i];
    };

    sum += arr[i];
    avg = Number((sum / arr.length).toFixed(2));
  };

  return `{ min: ${min}, max: ${max}, avg: ${avg} }`;
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
  sum += arr[i];
};
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = arrOfArr[0];
  for (i = 0; i < arrOfArr.length; i++) {
    worker(arrOfArr);
  if (max < worker(arrOfArr)) {
    max = sum;
  };
}
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
