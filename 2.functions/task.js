function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            sumEvenElement += num;
        } else {
            sumOddElement += num;
        }
    }

    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            sumEvenElement += num;
            countEvenElement++;
        }
    }

    return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (let arr of arrOfArr) {
        const result = func(...arr);

        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }

    return maxWorkerResult;
}

const arr = [
    [10, 10, 11, 20, 10],
    [67, 10, 2, 39, 88],
    [72, 75, 51, 87, 43],
    [30, 41, 55, 96, 62]
];

document.getElementById("task1").innerText = `Maximum Sum of Elements: ${makeWork(arr, summElementsWorker)}`;
document.getElementById("task2").innerText = `Maximum Difference between Max and Min: ${makeWork(arr, differenceMaxMinWorker)}`;
document.getElementById("task3").innerText = `Maximum Difference between Even and Odd Elements: ${makeWork(arr, differenceEvenOddWorker)}`;
document.getElementById("task4").innerText = `Maximum Average of Even Elements: ${makeWork(arr, averageEvenElementsWorker)}`;
