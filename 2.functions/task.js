// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  
  for (let i = 0; i < arr.length; i++) {   
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
  
  for (let i = 0; i < arr.length; i++) {  
    sum += arr[i];
  };

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) { 
    const funcNozzle = func(arrOfArr[i]);  
    if (max < funcNozzle) {
      max = funcNozzle;
    };
  };

  return max;
}


// Задание 3
function worker2(arr) {
  let maxInArr = arr[0];
  let minInArr = arr[0];
  
  for (let i = 0; i < arr.length; i++) {   
    if (maxInArr < arr[i]) {
      maxInArr = arr[i];
    };
    if (minInArr > arr[i]) {
      minInArr = arr[i];
    };
  };

  return Math.abs(maxInArr - minInArr);
}
