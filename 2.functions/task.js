// Задание 1
function getArrayParams(arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0; 
  let avg;


  //console.log(max);
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > max){

      max = arr[i]
      // console.log(msx)

    }

    if (arr[i] < min){

      min = arr[i];

    }

    sum += arr[i] / arr.length;
    // console.log(sum);
   
    avg = sum.toFixed(2);
    // console.log(avg);
    
  }

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {

  let sum = 0;
 
  for (let i = 0; i < arr.length; i++) {

    sum += arr[i]
      
  }

  return sum;
}

function makeWork(arrOfArr, func) {

  let max = -Infinity;
  
  for (let n = 0; n < arrOfArr.length; n++) {

    let sumElem = arrOfArr[n];

    func(sumElem);

    // console.log(func(sumElem))

    // console.log(sumElem)
    
     if (func(sumElem) > max) {

       max = func(sumElem);

     }
    
  };
  
  return max
}



// Задание 3
function worker2(arr) {

  let max = -Infinity;

  let min = Infinity;

  let diff;

  for (let i = 0; i < arr.length; i ++) {

    if (arr[i] > max) {

      max = arr[i];

    }

    if (arr[i] < min) {

      min = arr[i];

    }

    diff = max - min;

  }

  return diff 

}
