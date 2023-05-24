// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  min = max = arr[0];
  arr.forEach(element => {
    sum += element;
    if (min >= element ) {min = element};
    if (max <= element ) {max = element};
  });
  avg = Number((sum/arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum =0;
  arr.forEach(element => {sum += element});
  return sum;
}

function makeWork(arrOfArr, func) {
  let max =0;
  arrOfArr.forEach(element => {
    let tmp = func(element);
    if (max <= tmp ) {max = tmp};
  });
  return max;
}

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
}