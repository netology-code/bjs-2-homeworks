function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
    let sample = users.filter(user => user.gender === gender).map(old => old.age);
    let result = sample.reduce((sum, age) => sum += age, 0) / sample.length;
    return (sample.length > 0) ? result : 0;
}
