function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}


function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(user => user.gender === gender).map(itemAges => itemAges.age).reduce((sumAges, age, index, arrAges) => {
    sumAges += age;
    if (index === arrAges.length - 1) {
        return sumAges / arrAges.length;
    }
        return sumAges;
    }, 0);                       
  return result;
}