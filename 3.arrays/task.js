function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((number, index) => number === arr2[index]);
}

function advancedFilter(arr) {
  return arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);
}
