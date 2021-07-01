function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  if(arr1.length === arr2.length && arr1.every(function (item, idx) {return item === arr2[idx];})) {
    result = true;
  } else {
    result = false;
  }

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter((item) => {
    if(item > 0) return item; 
  }).filter((item) => {
    return item % 3 === 0;
  }).map((item) => {
    return item * 10;
  });

  return resultArr; // array
}
