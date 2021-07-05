function compareArrays(arr1, arr2) {
  // Ваш код
  return (
    arr1.length === arr2.length &&
    arr1.every((item, idx) => item === arr2[idx])
  );
}

function advancedFilter(arr) {
  // Ваш код
  return arr
    .filter((item) => item > 0 && item % 3 === 0)
    .map((item) => item * 10);
}

function getValuestCountToSumValues(arr, sum) {
   return arr.reduce((accum, item) => accum.total >= sum ? accum : { counter: accum.counter + 1, total: accum.total + item }, {total: 0, counter: 0}).counter;
}

console.log(getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 10));
console.log(getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 20));
