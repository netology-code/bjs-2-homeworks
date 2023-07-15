//Task 1
function getArrayParams(...arr) {
let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = 0;
  let sum = arr.reduce((accumulator, current) => accumulator + current, 0);
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}
// Task 2
function summElementsWorker(...arr) {
  if (arr.length > 0) {
    return arr.reduce((accumulator, current) => accumulator + current, 0); 
    } else {
    return 0;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length > 0) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return max - min;    
    } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length === 0) {
    return 0;
    } else {
    for (let x of arr) {
      if (x % 2 === 0) {
        sumEvenElement+=x;
      }  else {
        sumOddElement+=x;
      }
    }
   }
   return sumEvenElement - sumOddElement;
  }

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if ( arr.length === 0) {
    return 0;
  } else {
    for (let x of arr) {
      if (x % 2 === 0) {
        sumEvenElement+=x;
        countEvenElement++;
      }
    }
    return sumEvenElement / countEvenElement;
  }
}

// Task 3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let x of arrOfArr) {
    const result = func(...x);

}
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
