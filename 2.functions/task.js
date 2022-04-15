// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  
  for (i = 0; i < arr.length; i++) {
    let arr;
    if (max < arr[i]) {
      max = arr[i];
    };
    if (min > arr[i]) {
      min = arr[i];
    };

    sum += arr[i];
  };

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  
  for (i = 0; i < arr.length; i++) {
    let arr;
    sum += arr[i];
  };

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  const funcNozzle = func(arrOfArr[i]);

  for (i = 0; i < arrOfArr.length; i++) {
    let arrOfArr;
    if (max < funcNozzle) {
      max = funcNozzle;
    };
  };

  return max;
}


// Задание 3
function worker2(arr) {
  let difference = 0;
  let maxInArr = arr[0];
  let minInArr = arr[0];
  
  for (i = 0; i < arr.length; i++) {
    let arr;
    if (maxInArr < arr[i]) {
      maxInArr = arr[i];
    };
    if (minInArr > arr[i]) {
      minInArr = arr[i];
    };

     difference = Math.abs(maxInArr - minInArr);
  };

  return difference;
}
