function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length === arr2.length) {
    result = arr1.every((item, index) => item === arr2[index]);
  } else {
    result = false;
  }
  return result; // boolean
}

// function compareArrays(arr1, arr2) {
//   return arr2.length === arr1.length && arr1.every((item, index) => item === arr2[index]); 
// }

function advancedFilter(arr) {
  return arr.filter((item) => item > 0 && item % 3 === 0).map((item) => item * 10)
}

// function advancedFilter(arr) {
//   return arr.reduce((acc, value) => {
//     if (value > 0 && value % 3 === 0) {
//       acc.push(value * 10)
//     }
//     return acc;
//   }, [])
// }