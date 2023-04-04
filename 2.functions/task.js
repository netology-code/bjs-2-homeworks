'use strict';

function getArrayParams(...arr) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const sum = arr.reduce((acc, value) => (acc += value), 0);
	const avg = +(sum / arr.length).toFixed(2);

	return { min, max, avg };
}

function summElementsWorker(...arr) {
	if (!arr || arr.length === 0) {
		return 0;
	}

	const sum = arr.reduce((acc, value) => (acc += value), 0);

	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (!arr || arr.length === 0) {
		return 0;
	}

	const diffenrenceResult = Math.max(...arr) - Math.min(...arr);

	return diffenrenceResult;
}

function differenceEvenOddWorker(...arr) {
	if (!arr || arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (!arr || arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}

	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}