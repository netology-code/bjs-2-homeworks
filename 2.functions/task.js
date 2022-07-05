// Задание 1
function getArrayParams(arr) {
  
  let min = 100;
  let max = -100;
  let sum = 0; 
  let avg;

  for (let i = 0; i < arr.length; i++){
    
    if (min > arr[i]){
      min = arr[i];
    }

    if (max < arr[i]){
      max = arr[i];
    }
    
    sum += arr[i];

    avg = +(sum / Number(arr.length)).toFixed(2);
  }
  
  // Ваш код
  
  return { min: min, max: max, avg: avg};
}



//console.log(getArrayParams([100, -100, 50]));
//console.log(getArrayParams([10, 20, 30]));
//console.log(getArrayParams([1, -4, 7]));

//console.log(makeWork([[10,10,20],[20,19,10]],worker));
//console.log(makeWork([[12,23,31],[41,5,61]],worker));
//console.log(makeWork([[14,21,36],[15,26,39]],worker));




// Задание 2
function worker(arr) {
  let sum=0;
  
  // Ваш код
  for (let i = 0; i < arr.length; i += 1){
    sum += arr[i];
  }
    
   return sum; 
}

function makeWork(arrOfArr, func) {
   let max = 0;
  
  for (let i=0; i < arrOfArr.length; i += 1) {

  func(arrOfArr[i]);
    if (func(arrOfArr[i]) > max){
      max = func(arrOfArr[i]);
    }
   }
 return max;
  
}







// Задание 3
function worker2(arr) {
  // Ваш код
     let min = Infinity;
     let max = -Infinity;
  for (let i = 0; i < arr.length; i += 1){
 
    if (min>arr[i]){
      min = arr[i];
    }

    if (max < arr[i]){
      max = arr[i];
    }
    
   

    
  }
  
  return  Math.abs(max-min);
}



