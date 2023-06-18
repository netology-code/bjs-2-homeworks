function getArrayParams(...arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = arr[0]; //changed from original post
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
      if (arr[i] < min) {
          min = arr[i];
      }
      sum = sum + arr[i];
  }
  let avg = sum/arr.length;
  return { min: min, max: max, avg: parseFloat(avg.toFixed(2))};
}

function summElementsWorker(...arr) {
  let sum=0;
  arr.forEach(element => {
    sum += Number(element);
  });
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) return 0;
  
  return Math.max.apply(null, arr) - Math.min.apply(null, arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) return 0;
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach(element => {
    switch (element%2) {
      case 0:
        evenSum+=element;
        break;
      default:
        oddSum+=element;
        break;
    }
  });

  return evenSum - oddSum;

}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) return 0;
  let evenSum = 0;
  let evenCounter = 0;
  let oddSum = 0;
  arr.forEach(element => {
    switch (element%2) {
      case 0:
        evenSum+=element;
        evenCounter++;
        break;
      default:
        oddSum+=element;
        break;
    }
  });
  return evenSum/evenCounter;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  if (arrOfArr.length == 0) return 0;
  arrOfArr.forEach(element => {
    const workerResult = func(...element);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult
    }
  });
  return maxWorkerResult;
}