function compareArrays(arr1, arr2) {
  // Ваш код
  return (
    arr1.length === arr2.length &&
    arr1.every(function (item, idx) {
      return item === arr2[idx];
    })
  );
}

function advancedFilter(arr) {
  // Ваш код
  return arr
    .filter((item) => {
      return item > 0 && item % 3 === 0;
    })
    .map((item) => {
      return item * 10;
    });
}
