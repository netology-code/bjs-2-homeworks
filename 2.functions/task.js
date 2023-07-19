function getArrayParams(...arr) {

  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let sum = 0;
  for (let i = 0; i < arr.length; i++) { sum += arr[i] }

  let avg = +(sum / arr.length).toFixed(2)
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) { sum += arr[i] };
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) { return 0 }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let dif = max - min;
  return dif;

}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) { sumEvenElement += arr[i] } else
      if ((arr[i] % 2) !== 0) {
        sumOddElement += arr[i];
      }

  }
  let differenceEvenOdd = sumEvenElement - sumOddElement;

  return differenceEvenOdd;

}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) { return 0 }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) { sumEvenElement += arr[i] };
    if ((arr[i] % 2) === 0) { countEvenElement += 1 };
  }
  let averageValue = sumEvenElement / countEvenElement;
  return averageValue;
}



function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const currentElement = func(...arrOfArr[i]);

    if (currentElement > maxWorkerResult) {
      maxWorkerResult = currentElement;
    }
  }
  return maxWorkerResult;
}
