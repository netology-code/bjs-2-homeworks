function compareArrays(arr1, arr2) {
  let result;
  return result = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
  let result = arr.filter(gender => gender).map(midAge => midAge.age).reduce((acc, item, index, arr) => {
    acc += item;
    if(index === arr.length - 1) {
        return acc / arr.length;
    }
    return acc;
  });
  
}
