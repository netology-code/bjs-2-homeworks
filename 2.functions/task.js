<<<<<<< HEAD
=======
<<<<<<< HEAD
// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum =0;
  min = max = arr[0];
  arr.forEach(element => {
    sum += element;
    if (min >= element ) {min = element};
    if (max <= element ) {max = element};
  });
  avg = Number((sum/arr.length).toFixed(2));
=======
>>>>>>> 4e200f280cc04f2f03389b5cf124dcc084d1d4b9
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
<<<<<<< HEAD
  return { min: min, max: max, avg: avg };
}

=======
>>>>>>> 93f602e04b8e36399037029d932f7625788186b8
  return { min: min, max: max, avg: avg };
}

<<<<<<< HEAD
// Задание 2
function worker(arr) {
  let sum =0;
  arr.forEach(element => {sum += element});
  return sum;
=======
>>>>>>> 4e200f280cc04f2f03389b5cf124dcc084d1d4b9
//Задание 2
function summElementsWorker(...arr) {
  let sum = 0;
  arr.forEach(element => { sum += element });
  return sum;

>>>>>>> 93f602e04b8e36399037029d932f7625788186b8
}

<<<<<<< HEAD
function makeWork(arrOfArr, func) {
  let max =0;
  arrOfArr.forEach(element => {
    let tmp = func(element);
    if (max <= tmp ) {max = tmp};
  });
  return max;
=======
function differenceMaxMinWorker(...arr) {
  let min, max, d;
  min = max = d = arr[0];
  arr.forEach(element => {
    if (min >= element) { min = element };
    if (max <= element) { max = element };
  });
  d = max - min;
  return Math.abs(d);
<<<<<<< HEAD
=======
>>>>>>> 93f602e04b8e36399037029d932f7625788186b8
>>>>>>> 4e200f280cc04f2f03389b5cf124dcc084d1d4b9
}

<<<<<<< HEAD
// Задание 3
function worker2(arr) {
  let min, max, d;
  min = max = d = arr[0];
  arr.forEach(element => {
    if (min >= element ) {min = element};
    if (max <= element ) {max = element};
  });
  d = max-min;
  return Math.abs(d);
=======
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
<<<<<<< HEAD
=======
>>>>>>> 93f602e04b8e36399037029d932f7625788186b8
>>>>>>> 4e200f280cc04f2f03389b5cf124dcc084d1d4b9
}
<<<<<<< HEAD
=======

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
<<<<<<< HEAD
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
=======
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

>>>>>>> 93f602e04b8e36399037029d932f7625788186b8
>>>>>>> 4e200f280cc04f2f03389b5cf124dcc084d1d4b9
