function compareArrays(arr1, arr2) {
  let result;
  const compareNumber = (arr1, arr2) => arr1.every(item) === arr2.every(item);
    if (arr1.length === arr2.length && compareNumber) {
      result = true;
    } else {result = false};

  return result;
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);
 
  return resultArr;
}
