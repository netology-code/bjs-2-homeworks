//Задача 1

function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);

  return result; // boolean
}

// Задача 2

function advancedFilter(arr) {
  // let resultArr = arr.filter(n, i > 0).filter(n, i % 3 === 0).map(n, i * 10);
  let resultArr = arr.filter((n, i) => n > 0).filter((n, i) => n % 3 === 0).map((n, i) => n * 10);

  return resultArr; // array
}