"use strict"
// Задание 1
const arrMinMax = [];
for (let i = -100; i <= 100; i++){
  arrMinMax.push(i)
}
function getArrayParams(numbers) {
  let min = numbers[0];
  let max = numbers[0];
  let sum = 0;  
  for (let i = 0; i <numbers.length; i++){
    let element = numbers[i];
    if (element < min){
      min = element;
    }
    if (element>max){
      max = element;
    }
    sum = sum + element;
  }
  let avg = sum / numbers.length;
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
}
const result = getArrayParams(arrMinMax);
console.log (result);

// Задание 2
let arrOfArr=[];
function worker(arr) {
  let sum = 0;
  for (let i = 0; i <arr.length; i++){
    let element = arr[i];
    sum = sum + element;
  }
  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = 0;
  let arrayOfSums = [];
  for (let i = 0; i <arrOfArr.length; i++){
    let sumElement = worker(arrOfArr[i]);
    arrayOfSums.push(sumElement);
  }  
  for (let i = 0; i <arrayOfSums.length; i++){
    let sumInArray = arrayOfSums[i];
    if (sumInArray > max){
      max = sumInArray;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let difference = 0;  
  for (let i = 0; i <arr.length; i++){
    let element = arr[i];
    if (element < min){
      min = element;
    }
    if (element>max){
      max = element;
    }    
  }
  difference = max - min;
  difference = Math.abs(difference);
  return difference;
}



