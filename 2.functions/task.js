function getArrayParams(...arr) {

  if (arr.length === 0) return 0;
// Вариант 1

/*
  let 
    min = Infinity, 
    max = -Infinity,
    sum = 0;

    for (let i = 0; i < arr.length; i++) {
      min = min < arr[i] ? min : arr[i];
      max = max > arr[i] ? max : arr[i];
      sum += arr[i];
    }

    const avg = +((sum / arr.length).toFixed(2));
*/

// Вариант 2
  const 
    min = Math.min(...arr), 
    max = Math.max(...arr),
    sum = arr.reduce((accumulator, item) => accumulator + item, 0),
    avg = +((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  if (arr.length > 0) return arr.reduce((accumulator, item) => accumulator + item, 0);
  return 0;

}

function differenceMaxMinWorker(...arr) {

  if (arr.length > 0) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
  }
  return 0;
}

function differenceEvenOddWorker(...arr) {

  if (arr.length === 0) return 0;

  let 
    sumEvenElement = 0,
    sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) sumEvenElement += arr[i];
    else sumOddElement += arr[i];
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

  if (arr.length === 0) return 0;

  let
    sumEvenElement = 0,
    countEvenElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i],
      countEvenElement++;
    }
  }

  return +((sumEvenElement / countEvenElement).toFixed(2));
}

function makeWork (arrOfArr, func) {

  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const tempResult = func(...arrOfArr[i]); //console.log('res= ' + tempResult);
    maxWorkerResult = maxWorkerResult > tempResult ? maxWorkerResult : tempResult;
  }

  return maxWorkerResult;

}


// summElementsWorker
console.log('Проверка функции summElementsWorker');
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61
console.log(' ');

// differenceMaxMinWorker
console.log('Проверка функции differenceMaxMinWorker');
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10
console.log(' ');

// differenceEvenOddWorker
console.log('Проверка функции differenceEvenOddWorker');
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269
console.log(' ');

// averageEvenElementsWorker
console.log('Проверка функции averageEvenElementsWorker');
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38
console.log(' ');

console.log('Проверка функции makeWork');
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72