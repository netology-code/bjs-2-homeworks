"use strict"

function solveEquation(a, b, c) {
	if (a === 0) return ["Уравнение не квадратное"];

	let answer = [];
	let d = Math.pow(b, 2) - 4 * a * c
	if (d < 0) return answer;
	if (d === 0) {
		answer = [-b / (2 * a)];
	} else if (d > 0) {
		answer.push((-b + Math.sqrt(d)) / (2 * a));
		answer.push((-b - Math.sqrt(d)) / (2 * a));
	}
	return answer;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentHundred = percent / 100;
	let monthPercent = percentHundred / 12;
	let creditBody = amount - contribution;

	let pay = creditBody * (monthPercent + (monthPercent / (Math.pow(1 + monthPercent, countMonths) - 1)));

	let summaryPay = +(pay * countMonths).toFixed(2);

	return summaryPay;
}
