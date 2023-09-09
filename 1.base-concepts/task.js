"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let d = (b ** 2) - (4 * a * c);
	if (d === 0) {
		arr.push(-b / (2 * a))
	} else if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = (percent / 12) / 100;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));
  let totalPaymentAmount = +(monthlyPayment * countMonths).toFixed(2);
  return totalPaymentAmount;
}
