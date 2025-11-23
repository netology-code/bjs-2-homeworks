"use strict"

// ЗАДАЧА №1

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value > max) {
      max = value;
    }

    if (value < min) {
      min = value;
    }

    sum += value;

  }

  let avg = Number((sum / arr.length).toFixed(2));
  
  return {min, max, avg};
}

console.log(getArrayParams(1,2,3))


// ЗАДАЧА №2


// ЗАЖАЧА №3