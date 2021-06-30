"use strict";

function compareArrays(arr1, arr2) {
  let result;

  if(Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length) {

    arr1.every((el, i) => {
      result = el === arr2[i];
    });

  } else {
    result = false;
  }


  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  if(Array.isArray(arr)) {
    resultArr = arr.filter(
        num => num > 0
    ).filter(
        num => num % 3 === 0
    ).map(
        num => num * 10
    );

  } else {
    console.log(`arr is not array`);
    return;
  }

  return resultArr; // array
}
