function getArrayParams(arr) {
    let min = arr[0];
    let max = min;
    let sum = 0;
    let avg;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i]
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    avg = sum / arr.length;
    return {min: +min.toFixed(2), max: +max.toFixed(2), avg: +avg.toFixed(2),};
}

console.log(getArrayParams([-10])) // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams([1]))  // { min: -100, max: 10, avg: -16.80 }


// Задание 2

function worker(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function makeWork(arrOfArr, func) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < arrOfArr; i++) {
        sum = func(arrOfArr[i]);
        if (sum > max) {
            max = sum;
        }
    }
    return max;

}

console.log(worker([1, 2, 3])); // 6
console.log(worker([4, 5, 6])); // 15
let arrOfArr = [[1, 2, 3], [4, 5, 6]];
console.log(makeWork(arrOfArr, worker)); // 15


// Задание 3
function worker2(arr) {
    let dist;
    let min = arr[0];
    let max = min;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    dist = max - min;
    dist = Math.abs(dist);
    return dist;
}

console.log(worker2([0, 0, 0])); // 0 - 0 = 0
console.log(worker2([-1, -99])); // -99 - (-1) = -98 => 98
arrOfArr = [[0, 0, 0], [-1, -99]];
console.log(makeWork(arrOfArr, worker2)); // 98