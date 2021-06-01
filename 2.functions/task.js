// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
    sum += element;
  }
  let avg = (sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

// function getArrayParams(arr) {
//   return {
//     min: Math.min(...arr),
//     max: Math.max(...arr),
//     avg: (arr.reduce((acc, value) => acc + value, 0) / arr.length).toFixed(2),
//   };
// }

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let index = 0; index < arrOfArr.length; index++) {
    const element = arrOfArr[index];
    const result = func(element);
    if (result > max) {
      max = result;
    }
  }
  return max;
}

// function worker(arr) {
//   return arr.reduce((acc, value) => acc + value, 0);
// }

// function makeWork(arrOfArr, func) {
//   let max = 0;
//   arrOfArr.forEach((element) => {
//     const result = func(element);
//     if (result > max) {
//       max = result;
//     }
//   });
//   return max;
// }
