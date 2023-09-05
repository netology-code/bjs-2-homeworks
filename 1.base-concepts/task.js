/* Задача №1 */
"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let D = (b ** 2) - (4 * a * c);
	if (D < 0) {
		arr.push();
	} else if (D == 0) {
		let quadraticRoots = -b / (2 * a);
		arr.push(quadraticRoots);
	} else if (D > 0) {
		let firstRoot = (-b + Math.sqrt(D)) / (2 * a);
		let secondRoot = (-b - Math.sqrt(D)) / (2 * a);
		arr.push(firstRoot, secondRoot);
	}
	return arr;
}

/* Задача №2 */
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentTest = Number(percent);
	if (percentTest != Number(percent)) {
		return false;
	} else {
		let P = ((percent / 12) / 100);
		let S = amount - contribution;
		let payment = S * (P + (P / (((1 + P) ** countMonths) - 1)));

		return Number(parseFloat(payment * countMonths).toFixed(2))
	};
}

console.log(calculateTotalMortgage(10, 0, 50000, 12))