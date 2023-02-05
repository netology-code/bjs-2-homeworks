function getArrayParams(arr){
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++ ){
    sum += arr[i];
    if (arr[i] > max){
      max = arr[i]
    }
    else if (arr[i] < min){
      min = arr[i];
    }
  }
  avg = sum / arr.length;
  return { min: +min.toFixed(2), max: +max.toFixed(2), avg: +avg.toFixed(2), };
}
console.log(getArrayParams([-99, 99, 10])) // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams([1, 2, 3, -100, 10]))  // { min: -100, max: 10, avg: -16.80 }
// Задание 2


function worker(arr) {
  let sum = 0;
for (let i = 0; i < arr.length; i++){
  sum += arr[i];
}
  return sum;
}


function makeWork(arrOfArr, func) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < arrOfArr; i++) {
    sum = func(arrOfArr[i]);
   if (sum > max){
     max = sum;
   }
      }
  return max;

}
let arrOfArr = [[1, 2, 3], [4, 5, 6]];

console.log(makeWork(arrOfArr, worker)); // 15








// Задание 3
function worker2(arr) {
  // Ваш код
}
