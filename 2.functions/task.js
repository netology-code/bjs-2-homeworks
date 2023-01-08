function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    } else if (arr[i] <= min) {
      min = arr[i];
    }
    sum += arr[i];
  };

  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  
  return sum;
};

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= max) {
        max = arr[i];
      } else if (arr[i] <= min) {
        min = arr[i];
      }
    }
  } else {
    min = 0;
    max = 0;
  };

  let difference = max - min;
  return difference;
};

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  };

  let differenceSumEvenAndOdd = sumEvenElement - sumOddElement;
  return differenceSumEvenAndOdd;
};

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let averageEvenElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1; 
    }
  };
 
  if (arr.length > 0) {
    averageEvenElement = Number((sumEvenElement / countEvenElement).toFixed(2));
  } else {
    averageEvenElement = 0;
  };

  return averageEvenElement;
};

function makeWork(arrOfArr, func) {
  let maxWorkerResult = - Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let comparedValue = func(...arrOfArr[i]);
    if (comparedValue > maxWorkerResult) {
      maxWorkerResult = comparedValue;
    }
  };

  return maxWorkerResult;
};
