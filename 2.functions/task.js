function getArrayParams(...arr) {
  let min=arr[0];
  let max=arr[0];
  let sum=arr[0];
  for (let i=1; i<arr.length; i++) {
    if (arr[i]>max) {max=arr[i]};
    if (arr[i]<min) {min=arr[i]};
    sum=sum+arr[i];
    }
  let avg=sum/arr.length;
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
   if (arr.length==0) {
    return 0;
  }
  let sum=arr[0];
  for (let i=1; i<arr.length; i++) {
   sum=sum+arr[i]; 
  }
 return sum;
}

function differenceMaxMinWorker(...arr) {
 if (arr.length==0) {
    return 0;
  }  
let max=Math.max.apply(null, arr);
let min=Math.min.apply(null, arr);
let difference=max-min;
return difference;
}

function differenceEvenOddWorker(...arr) {
   if (arr.length==0) {
    return 0;
  }
  let sumEvenElement=0;
  let sumOddElement=0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i]%2==0) {
      sumEvenElement=sumEvenElement+arr[i];
    } 
    else {
     sumOddElement=sumOddElement+arr[i];
    }
  }
  let difference=sumEvenElement-sumOddElement;
  return difference;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length==0) {
    return 0;
  }
  let sumEvenElement=0;
  let countEvenElement=0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i]%2==0) {
      sumEvenElement=sumEvenElement+arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement/countEvenElement;  
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
function makeWork (arrOfArr, func) {
 let maxWorkerResult=func(...arrOfArr[0]);
 for (let i=1; i<[...arrOfArr].length; i++) {
   if (func(...arrOfArr[i])>maxWorkerResult) {
    maxWorkerResult=func(...arrOfArr[i]);
   }
  }
  return maxWorkerResult;
}

