// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
  
  min = arr[0];

  max = arr[arr.length - 1];

  sum = 0;

  avg = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > max) {

      max = arr[i];

    }
    if (arr[i] < min) {

      min = arr[i];

    }

    sum = sum + arr[i];

  };

  avg = Number((sum / arr.length).toFixed(2));

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {

  let sum = 0;
 
  for (let i = 0; i < arr.length; i++) {

    sum += arr[i]
      
  };

  return sum;
}

function makeWork(arrOfArr, func) {

  let max;
  
  max = -Infinity;

  for (let j = 0; j < arrOfArr.length; j++) {

    if (func(arrOfArr[j]) > max) {

      max = func(arrOfArr[j]);

    }

  };
  
  return max
}



// Задание 3
function worker2(arr) {

   let max, min;

  min = arr[0];

  max = arr[0];

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] > max) {

      max = arr[i];

    }

    if (arr[i] < min) {

      min = arr[i];

    }

  }

  return max - min;

}
