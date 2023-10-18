function getArrayParams(...arr) {
	if (arr.length === 0) {
		return {
			min: 0,
			max: 0,
			avg: 0
		};
	}

	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	const avg = +(sum / arr.length).toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (args.length === 0) return 0;
	return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function differenceMaxMinWorker(...arr) {
	if (args.length === 0) return 0;
	const max = Math.max(...args);
	const min = Math.min(...args);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (args.length === 0) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (const num of args) {
		if (num % 2 === 0) {
			sumEvenElement += num;
		} else {
			sumOddElement += num;
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (args.length === 0) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (const num of args) {
		if (num % 2 === 0) {
			sumEvenElement += num;
			countEvenElement++;
		}
	}

	if (countEvenElement === 0) return 0;
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (const arr of arrOfArr) {
		const result = func(...arr);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}