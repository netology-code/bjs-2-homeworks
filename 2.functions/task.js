// Задание 1
function getArrayParams(...arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  min = max = arr[0];
  arr.forEach(element => {
    sum += element;
    if (min >= element) { min = element };
    if (max <= element) { max = element };
  });
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

//Задание 2
function summElementsWorker(...arr) {
  let sum = 0;
  arr.forEach(element => { sum += element });
  return sum;

}

function differenceMaxMinWorker(...arr) {
  let min, max, d;
  min = max = d = arr[0];
  arr.forEach(element => {
    if (min >= element) { min = element };
    if (max <= element) { max = element };
  });
  d = max - min;
  return Math.abs(d);
}

function differenceEvenOddWorker(...arr) {
  let sumOddElement = 0;//нечетный
  let sumEvenElement = 0;//четный
  let d = 0;

  arr.forEach(element => {

    if (element % 2 == 0) {
      //четный
      sumEvenElement += element;
    }
    else {
      //Нечётное
      sumOddElement += element;
    }
    d = sumEvenElement - sumOddElement;
    return Math.abs(d);

  })
  console.log(d);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;//четный
  let countEvenElement = 0;

  arr.forEach(element => {

    if (element % 2 == 0) {
      //четный
      sumEvenElement += element;
    }
    else {
      countEvenElement += element;
    }
    countEvenElement = (sumEvenElement + sumEvenElement) / 2;
    return Math.abs(countEvenElement);

  })
  console.log(countEvenElement);
}
//Задание 3
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  arrOfArr.forEach(element => {
    let tmp = func(element);
    if (maxWorkerResult <= tmp) { maxWorkerResult = tmp };
  });
  return maxWorkerResult;
}
