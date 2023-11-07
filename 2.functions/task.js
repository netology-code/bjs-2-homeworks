function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
        max = arr[i];
    } else if (arr[i] < min) {
        min = arr[i];
    } 
    sum += arr[i];
  }

  const averageValue = sum / arr.length;
  const avg = +(averageValue.toFixed(2));

  return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    } else if (arr[i] < min) {
      min = arr[i]
    }
  } 

  const differenceMaxMin = max - min;

  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let massivEven = [];
  let massivOdd = []; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      massivEven.push(arr[i]);
    } else {
      massivOdd.push(arr[i]);
    }
  }
  
  const sumEven = massivEven.reduce((accumulator, currentVallue) => accumulator + currentVallue, 0);
  const sumOdd = massivOdd.reduce((accumulator, currentVallue) => accumulator + currentVallue, 0);
  const difference = sumEven - sumOdd;

  return difference;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    }
  }

  const averageValue = sumEvenElement / countEvenElement;

  return averageValue;
}

function makeWork(arrOfArr, func) {
  
  let maxWorkerResult = -Infinity;
  for (const arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  
  console.log(maxWorkerResult);

  return maxWorkerResult;
}
