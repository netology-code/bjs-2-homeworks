'use strict';

function solveEquation(a, b, c) {
	const arr = [];
	const discriminant = b ** 2 - 4 * a * c;

	if (discriminant === 0) {
		arr.push(-b / (2 * a));
	} else if (discriminant > 0) {
		arr.push(
			(-b + Math.sqrt(discriminant)) / (2 * a),
			(-b - Math.sqrt(discriminant)) / (2 * a)
		);
	}
	return arr
}

console.log(solveEquation(1, 2, 1));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const percentStage = percent / 100 / 12;
	const bodyOfCredit = amount - contribution;
	const payment =
		bodyOfCredit *
		(percentStage + percentStage / ((1 + percentStage) ** countMonths - 1));
	const totalAmount = +(payment * countMonths).toFixed(2);

	if (Number.isNaN(totalAmount)) {
		return false;
	}

	return totalAmount;
}

console.log(calculateTotalMortgage(10, 1000, 50000, 12));
